# Daniel Reyes Hualacan | Portafolio

Portafolio web desarrollado con **React**, **Vite**, **TypeScript** y **Tailwind CSS**. El sitio reúne una tesis, archivo fotográfico, fotolibros enlazados externamente y material visual relacionado con investigación etnográfica, paisaje y territorio.

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React

## Instalación local

```bash
npm install
npm run dev
```

La aplicación quedará disponible normalmente en:

```text
http://localhost:3000
```

## Validación del proyecto

```bash
npm run lint
npm run build
```

## Estructura principal

```text
src/
├── App.tsx
├── data.ts
├── types.ts
├── index.css
└── components/
    ├── Header.tsx
    ├── Footer.tsx
    ├── Lightbox.tsx
    └── CasaCabraPanel.tsx
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Primer commit del portafolio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/daniel-reyes-portafolio.git
git push -u origin main
```

## Notas

Este proyecto no requiere claves API para ejecutarse. La tesis y el fotolibro se abren mediante enlaces externos a Dropbox; no hay previsualizadores emergentes para esos documentos. No subas archivos `.env` con credenciales reales al repositorio.
