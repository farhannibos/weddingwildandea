# Optimasi Loading Gambar (Vercel)

## Masalah:
- Gambar delay muncul di Vercel

## Penyebab:
- Next/Image dengan `fill` default `loading="lazy"` (delay untuk gambar di bawah viewport)
- Cover image punya `priority` (baik), tapi gallery/profile perlu optimasi

## Solusi:
- [x] 1. Cover: Tetap `priority` (above-fold) ✅
- [x] 2. Profile: Tambah `priority` (above-fold) ✅  
- [x] 3. Gallery thumbs: `loading="lazy"` + `placeholder="blur"` + low-res blurDataURL ✅
- [x] 4. Lightbox: `priority` (user-triggered) ✅
- [x] 5. Preload key images di layout.tsx ✅
- [x] 6. Generate blurDataURL otomatis Vercel (Vercel Image Optimization aktif otomatis) ✅
- [ ] 7. Test di Vercel

## Langkah Selanjutnya:
Edit files untuk optimasi LCP/CLS
