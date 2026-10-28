# Лаб 8 — Bootstrap ба Tailwind CSS

Лаб 6-ийн **Тохилог Студи** сайтын мэдээлэл, 6 төслийн карт, үйлчилгээ, видео болон 3D танилцуулгыг хоёр framework-ээр бүтээв.

## Ажиллуулах

1. Лаб 6-ийн `img/photo1.jpg`–`photo6.jpg` файлуудыг `assets/img/` руу хуулна.
2. Лаб 6-ийн `video/clip.mp4`, `video/clip.mn.vtt` файлуудыг `assets/video/` руу хуулна.
3. VS Code Live Server-ээр үндсэн `index.html` файлыг нээнэ. Bootstrap нь CDN ашиглана. Tailwind нь browser CDN ашиглан шууд харагдана.
4. Tailwind CLI-ээр бодитоор build хийх: `npm install`, дараа нь `npm run build` (интернет шаардлагатай). Энэ нь `tailwind/output.css` үүсгэнэ.
5. Tailwind production хувилбарыг туршихдаа `tailwind/index.html`-аас `@tailwindcss/browser@4` script болон `type="text/tailwindcss"` style блокийг авч, `output.css`-ийг үлдээнэ. Development preview-д browser CDN ашиглаж байгаа.

## Даалгаврын шалгалт

- Bootstrap navbar: `navbar`, `navbar-expand-lg`, `collapse`, `navbar-toggler`.
- Bootstrap 3 баганатай card grid: `row-cols-1 row-cols-md-2 row-cols-lg-3`.
- Bootstrap validation: `needs-validation`, `was-validated`, `invalid-feedback`, `checkValidity()`.
- Bootstrap dark mode: `data-bs-theme`.
- Bootstrap brand товч: `.btn-brand` ба `--brand` CSS variable.
- Tailwind grid: `grid sm:grid-cols-2 lg:grid-cols-3`.
- Tailwind dark mode: `@custom-variant dark` ба `.dark` class.
- Tailwind brand товч: `@theme --color-brand` ба `bg-brand`.
- Tailwind CLI: `npm run build`.

**Анхаарах:** Маягт нь зөвхөн client-side validation хийдэг. Сервер рүү өгөгдөл илгээхгүй. Зураг/видео эх файл энд хавсаргагдаагүй тул хэрэглэгч өөрийн Лаб 6-аас хуулна.
