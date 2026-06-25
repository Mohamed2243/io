# Mohamed AbdElhamed — Portfolio

Personal portfolio built with **Vite + TypeScript**.

## Local preview

```bash
npm install
npm run dev
```

Open: **http://localhost:5173/io/**

---

## رفع المشروع على GitHub (خطوة بخطوة)

### 1) اعمل Repository

1. ادخل [github.com/new](https://github.com/new)
2. اسم الـ repo: **`io`**
3. Public
4. Create repository

### 2) ارفع الكود

في PowerShell:

```powershell
cd e:\Work\Mohamed\io
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/Mohamed2243/io.git
git push -u origin main
```

> الحساب: **Mohamed2243**

### 3) فعّل GitHub Pages

1. Repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **Deploy from a branch**
3. **Branch:** `gh-pages` · **Folder:** `/ (root)` → **Save**
4. بعد أول push ناجح، استنى 1–2 دقيقة

**رابط الموقع:**
`https://Mohamed2243.github.io/io/`

> **ملاحظة:** أول push هيشغّل GitHub Action ويعمل branch اسمه `gh-pages` تلقائياً. بعدها فعّل Pages من الخطوات فوق.

---

## عشان يظهر لأي حد يدخل بروفايلك

GitHub **مش** بيعرض الموقع جوه صفحة البروفايل تلقائياً. لازم تعمل 3 حاجات:

### أ) حط رابط الموقع في البروفايل

1. [github.com/settings/profile](https://github.com/settings/profile)
2. **Website** → حط: `https://Mohamed2243.github.io/io/`
3. Save

> الرابط ده هيظهر **فوق** في صفحة بروفايلك لأي زائر.

### ب) Pin الـ repo

1. صفحة بروفايلك → **Customize your pins**
2. اختار repo **`io`**
3. Save

### ج) (اختياري) لو عايز الرابط يكون أقصر

لو عايز الموقع يكون على `https://Mohamed2243.github.io` مباشرة (من غير `/io`):

- اعمل repo جديد اسمه **`Mohamed2243.github.io`**
- انقل المشروع فيه وغيّر `base` في `vite.config.ts` من `'/io/'` إلى `'/'`

---

## تعديل البيانات

عدّل `src/data.ts`:

- GitHub & LinkedIn URLs
- Projects
- Skills & contact info

## Build

```bash
npm run build
npm run preview
```
