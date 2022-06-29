import React from 'react';
import { Upload, Progress, Image } from '@arco-design/web-react';
import { IconPlus, IconEdit } from '@arco-design/web-react/icon';
import { UploadItem } from '@arco-design/web-react/es/Upload';

export function AvatarUpload({avatar, id} : {avatar : string, id: number} ) {

  const originalAvatar:UploadItem = {
    uid: 'userAvatar'+id,
    url: avatar,
  }

  const [file, setFile] = React.useState(originalAvatar);
  const cs = `arco-upload-list-item${file && file.status === 'error' ? ' is-error' : ''}`;
  return (
    <div style={{ width: '150px',height:'150px' }}>
      <Upload
        action='/'
        fileList={file ? [file] : []}
        showUploadList={false}
        onChange={(_, currentFile) => {
          setFile({
            ...currentFile,
            url: URL.createObjectURL(currentFile.originFile),
          });
        }}
        onProgress={(currentFile) => {
          setFile(currentFile);
        }}
      >
        <div className={cs} style={{ width: '150px',height:'150px' }}>
          {file && file.url ? (
            <div className='arco-upload-list-item-picture custom-upload-avatar' style={{ width: '150px',height:'150px' }}>
              <img src={file.url} />
              <div className='arco-upload-list-item-picture-mask' style={{ width: '150px',height:'150px' }}>
                <IconEdit style={{fontSize:'32', marginTop:'60px'}}/>
              </div>
              {file.status === 'uploading' && (file.percent||0) < 100 && (
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
          ) : (
            <div className='arco-upload-trigger-picture' style={{ width: '150px',height:'150px' }}>
              <div className='arco-upload-trigger-picture-text' >
                <IconPlus />
                <div style={{ marginTop: 10, fontWeight: 600 }}>Upload</div>
              </div>
              
            </div>
          )}
        </div>
      </Upload>
    </div>
  );
}

export default AvatarUpload;
