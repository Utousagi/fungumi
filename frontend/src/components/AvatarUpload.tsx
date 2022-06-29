import React, { useEffect, useState } from 'react';
import { IconEdit } from '@arco-design/web-react/icon';
import { RootState } from '@/redux/reduxStore';
import { useSelector } from 'react-redux';
import { Progress } from '@arco-design/web-react';
import Upload, { UploadItem } from '@arco-design/web-react/es/Upload';
import upload from '@/service/OssUtil';
import axios from 'axios';
import { UserData } from '@/axios/User';

export function AvatarUpload({ userData }: { userData: UserData }) {
  const id = userData.userId;  
  const [file, setFile] = useState({uid:'1', url: userData.avatar} as UploadItem);

  useEffect(() => {
    setFile( {uid:'1', url: userData.avatar} as UploadItem);
  }, [userData]);

  const cs = `arco-upload-list-item${file && file.status === 'error' ? ' is-error' : ''}`;
  return (
    <div style={{ width: '150px', height: '150px' }}>
      <Upload
        customRequest={async (option) => {
          const { onProgress, onError, onSuccess, file } = option;
          const xhr = new XMLHttpRequest();

          if (xhr.upload) {
            xhr.upload.onprogress = function (event) {
              let percent;

              if (event.total > 0) {
                percent = (event.loaded / event.total) * 100;
              }

              onProgress(Number(percent), event);
            };
          }

          xhr.onerror = function error(e) {
            onError(e);
          };

          xhr.onload = function onload() {
            if (xhr.status < 200 || xhr.status >= 300) {
              return onError(xhr.responseText as Object);
            }
            axios.post("userInfo/avatar", {
              url: '//fungumi.oss-cn-qingdao.aliyuncs.com/avatar/avatar' + id + '.jpg'
            });
            onSuccess(xhr);
          };

          xhr.open('put', 'http://fungumi.oss-cn-qingdao.aliyuncs.com/avatar/avatar' + id + '.jpg' + '?OSSAccessKeyId=LTAI5tLExRGvvAwM1NXnSSaC&Signature=V3TkOipZ2YwJ5pCDm7NrOuquzh1X3m', true);
          const loadFileBob = (file: Blob) => {
            return new Promise(resolve => {
              let reader = new FileReader();
              reader.readAsArrayBuffer(file);
              let blob = null;
              reader.onload = e => {
                var target = e.target || {} as any;
                if (typeof target.result === 'object') {
                  blob = new Blob([target.result]);
                } else {
                  blob = target.result;
                }
                resolve(blob);
              };
            });
          };
          const blob = await loadFileBob(file);
          xhr.send(blob as unknown as Blob);

          return {
            abort() {
              xhr.abort();
            },
          };
        }}
        autoUpload={true}
        fileList={file ? [file] : []}
        showUploadList={false}
        onChange={(_, currentFile) => {
          setFile({
            ...currentFile,
            url: URL.createObjectURL(currentFile.originFile as unknown as File),
          });
        }}
        onProgress={(currentFile) => {
          setFile(currentFile);
        }}
      >
        <div className={cs} style={{ width: '150px', height: '150px' }}>
          <div className='arco-upload-list-item-picture custom-upload-avatar' style={{ width: '150px', height: '150px' }}>
            <img src={file.url} />
            <div className='arco-upload-list-item-picture-mask' style={{ width: '150px', height: '150px' }}>
              <IconEdit style={{ fontSize: '32', marginTop: '60px' }} />
            </div>
            {file.status === 'uploading' && (file.percent || 0) < 100 && (
              <Progress
                percent={file.percent || 0}
                type='circle'
                size='mini'
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translateX(-50%) translateY(-50%)',
                }}
              />
            )}
          </div>
        </div>
      </Upload>
    </div>
  );
}

export default AvatarUpload;
