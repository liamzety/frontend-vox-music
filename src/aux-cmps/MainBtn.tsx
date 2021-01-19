import React from 'react';
import { MainButton } from '../assets/style/global';

interface MainBtn {
  cb: () => void;
  content: string;
  label: string;
  primary?: boolean;
}
export function MainBtn({ cb, content, label, primary = true }: MainBtn) {
  return (
    <MainButton onClick={cb} className={primary ? '' : 'btn-secondary'}>
      <span className="btn-content">{content}</span>
      <span className="btn-glitch"></span>
      <span className="btn-label">{label}</span>
    </MainButton>
  );
}
