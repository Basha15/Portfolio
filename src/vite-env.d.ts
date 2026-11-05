/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RESEND_API_KEY?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_GITHUB_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
