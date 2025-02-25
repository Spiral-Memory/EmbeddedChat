import React, { useState, useEffect, useCallback, useRef } from 'react';
import { css } from '@emotion/react';
import {
  Box,
  Icon,
  ActionButton,
  Tooltip,
  Modal,
  useTheme,
} from '@embeddedchat/ui-elements';
import { useMediaRecorder } from '../../hooks/useMediaRecorder';
import useMessageStore from '../../store/messageStore';
import { getCommonRecorderStyles } from './ChatInput.styles';
import useAttachmentWindowStore from '../../store/attachmentwindow';

const VideoMessageRecorder = (props) => {
  const videoRef = useRef(null);
  const { disabled, displayName, popOverItemStyles } = props;
  const { theme } = useTheme();
  const styles = getCommonRecorderStyles(theme);

  const toogleRecordingMessage = useMessageStore(
    (state) => state.toogleRecordingMessage
  );

  const { toggle, setData } = useAttachmentWindowStore((state) => ({
    toggle: state.toggle,
    setData: state.setData,
  }));

  const [state, setRecordState] = useState('idle');
  const [time, setTime] = useState('00:00');
  const [recordingInterval, setRecordingInterval] = useState(null);
  const [file, setFile] = useState(null);
  const [isRecorded, setIsRecorded] = useState(false);

  const onStop = (videoChunks) => {
    const videoBlob = new Blob(videoChunks, { type: 'video/mp4' });
    const fileName = 'Video record.mp4';
    setFile(new File([videoBlob], fileName, { type: 'video/mp4' }));
  };

  const [start, stop] = useMediaRecorder({
    constraints: { audio: true, video: true }, // Update constraints as needed
    onStop,
    videoRef,
  });

  const stopRecording = async () => {
    stop();
    if (recordingInterval) {
      clearInterval(recordingInterval);
    }
    setRecordingInterval(null);
    setTime('00:00');
    setRecordState('idle');
  };

  const handleRecordButtonClick = () => {
    if (disabled) return;
    setRecordState('recording');
    try {
      start(videoRef.current);
      toogleRecordingMessage();
      const startTime = new Date();
      setRecordingInterval(
        setInterval(() => {
          const now = new Date();
          const distance = (now.getTime() - startTime.getTime()) / 1000;
          const minutes = Math.floor(distance / 60);
          const seconds = Math.floor(distance % 60);
          setTime(
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
              2,
              '0'
            )}`
          );
        }, 1000)
      );
    } catch (error) {
      console.log(error);
      setRecordState('idle');
    }
  };

  const handleCancelRecordButton = async () => {
    toogleRecordingMessage();
    await stopRecording();
    setIsRecorded(false);
  };

  const handleStopRecordButton = async () => {
    toogleRecordingMessage();
    setIsRecorded(true);
    await stopRecording();
  };

  const handleMount = useCallback(async () => {
    if (navigator.permissions) {
      try {
        await navigator.permissions.query({
          name: 'microphone',
        });
        await navigator.permissions.query({
          name: 'camera',
        });
        return;
      } catch (error) {
        console.warn(error);
      }
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      return;
    }

    try {
      if (
        !(await navigator.mediaDevices.enumerateDevices()).some(
          ({ kind }) => kind === 'audioinput'
        ) &&
        !(await navigator.mediaDevices.enumerateDevices()).some(
          ({ kind }) => kind === 'videoinput'
        )
      ) {
        return null;
      }
    } catch (error) {
      console.warn(error);
    }
  });

  useEffect(() => {
    handleMount();
  }, [handleMount]);

  useEffect(() => {
    if (isRecorded && file) {
      toggle();
      setData(file);
      setIsRecorded(false);
    }
    if (file) {
      setFile(null);
    }
  }, [isRecorded, file]);

  return (
    <>
      {state === 'idle' &&
        (displayName ? (
          <Box
            key="video"
            css={popOverItemStyles}
            onClick={handleRecordButtonClick}
            disabled={disabled}
          >
            <Icon name="video-recorder" size="1rem" />
            <span>{displayName}</span>
          </Box>
        ) : (
          <Tooltip text="Video Message" position="top">
            <ActionButton
              ghost
              square
              disabled={disabled}
              onClick={handleRecordButtonClick}
            >
              <Icon size="1.25rem" name="video-recorder" />
            </ActionButton>
          </Tooltip>
        ))}

      {state === 'recording' && (
        <>
          <ActionButton ghost square>
            <Icon size="1.25rem" name="disabled-recorder" />
          </ActionButton>
          <Modal
            open={state === 'recording'}
            onClose={handleCancelRecordButton}
            css={styles.modal}
          >
            <video
              muted
              autoPlay
              playsInline
              ref={videoRef}
              css={css`
                object-fit: cover;
                width: 100%;
                height: 95%;
              `}
            />
            <Box css={styles.controller}>
              <Tooltip text="Cancel Recording" position="bottom">
                <ActionButton ghost onClick={handleCancelRecordButton}>
                  <Icon size="1.25rem" name="circle-cross" />
                </ActionButton>
              </Tooltip>
              <Box css={styles.record}>
                <Box is="span" css={styles.dot} />
                <Box css={styles.timer}>{time}</Box>
              </Box>
              <Tooltip text="Finish Recording" position="bottom">
                <ActionButton ghost onClick={handleStopRecordButton}>
                  <Icon name="circle-check" size="1.25rem" />
                </ActionButton>
              </Tooltip>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};

export default VideoMessageRecorder;
