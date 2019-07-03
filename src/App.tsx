import React from 'react';
import styles from './App.module.scss';

type State = {
  stream: any,
  recorder: any,
  recording: any,
  chunks: any[],
  config: any,
}
type Props = {}
class App extends React.Component<Props, State> {
  state = {
    stream: null,
    recorder: null,
    recording: undefined,
    chunks: [] as any,
    config: {},
  }

  getDisplayMedia() {
    if (navigator.getDisplayMedia) {
      return navigator.getDisplayMedia({video: true});
      // @ts-ignore
    } else if (navigator.mediaDevices.getDisplayMedia) {
      // @ts-ignore
      return navigator.mediaDevices.getDisplayMedia({video: true});
    } else {
      // @ts-ignore
      return navigator.mediaDevices.getUserMedia({video: {mediaSource: 'screen'}});
    }
  }

  async startCapture() {
    const displayMediaStream = await this.getDisplayMedia();
    displayMediaStream.addEventListener('inactive', (event:any) => {
      this.stopCapture();
    });

    const screenRecorder = new MediaRecorder(displayMediaStream, {mimeType: 'video/webm'});
    this.setState({
      stream: displayMediaStream,
      recorder: screenRecorder,
      recording: undefined,
      chunks: [],
    });
    screenRecorder.addEventListener('dataavailable', (event:any) => {
      if (event.data && event.data.size > 0) {
        this.state.chunks.push(event.data);
      }
    });
    screenRecorder.start(10);
  }

  stopCapture() {
    try {
      // @ts-ignore
      this.state.recorder.stop();
      // @ts-ignore
      this.state.stream.getTracks().forEach((track:any) => track.stop());
    } catch (e) {
    }
    this.setState({
      recorder: null,
      stream: null,
      recording: window.URL.createObjectURL(new Blob(this.state.chunks, {type: 'video/webm'})),
    });
  }

  downloadFile() {
    const a = document.createElement("a");
    // @ts-ignore
    a.href = this.state.recording;
    const currentDate = new Date();
    const currentDateString = currentDate.getFullYear() + '-' + (currentDate.getMonth()+1) + '-' + currentDate.getDate() + ' at ' +
    currentDate.getHours() + '.' + currentDate.getMinutes() + '.' + currentDate.getSeconds();
    a.setAttribute('download', `ScreenRecording ${currentDateString}.webm`);
    a.click();
    return false;    
  }

  render() {
    const { recorder, recording } = this.state;
    return (
      <div className="App">
        {recorder &&
          <button onClick={() => this.stopCapture()} className={styles.StopButton} title='Stop' />
        }
        {!recorder &&
          <button onClick={() => this.startCapture()} className={styles.RecordButton} title='Record' />
        }
        <button disabled={!recording} className={styles.Hidden} title='Play' />
        <button disabled={!recording} className={styles.DownloadButton} onClick={() => this.downloadFile()} title='Download' />
        <button className={styles.Hidden} title='Settings' />
      </div>
    );
  }
}

export default App;
