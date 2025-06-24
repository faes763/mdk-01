# 🚀 DCIEL - Премиум IT-решения

> Современная лендинг-страница с многобрендовой системой тем и профессиональными UI компонентами

[![Vercel Deploy](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://mdk-01-c6uj.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Особенности

### 🎨 Многобрендовая система тем
- **DCIEL** - Deep Blue Electric (корпоративный tech-стиль)
- **CIEL** - Sky Blue Light (дружелюбный startup-стиль) 
- **FAES** - Mystical Purple (премиум luxury-стиль)
- Поддержка светлой и темной темы для каждого бренда
- Сохранение выбранной темы в localStorage

### 🏗️ Полная лендинг-страница
- ✅ Hero секция с градиентным фоном
- ✅ Блок преимуществ (6 карточек)
- ✅ Отзывы клиентов с рейтингами
- ✅ Демо услуг
- ✅ Статистика проектов
- ✅ Тарифные планы (3 уровня)
- ✅ CTA секции
- ✅ Контактная форма
- ✅ FAQ с раскрывающимися карточками
- ✅ Профессиональный футер

### 🎯 Интерактивные элементы
- **Dialog модальные окна** на основе shadcn/ui
- Формы с валидацией и обработкой состояний
- Hover эффекты и плавные анимации
- Адаптивный дизайн для всех устройств

## 🛠️ Технологии

| Технология | Версия | Описание |
|-----------|--------|----------|
| **Next.js** | 15.1.3 | React framework с SSR/SSG |
| **React** | 19.0.0 | UI библиотека |
| **TypeScript** | 5+ | Типизированный JavaScript |
| **Tailwind CSS** | 3.4+ | Utility-first CSS framework |
| **shadcn/ui** | Latest | Современные React компоненты |
| **Radix UI** | Latest | Accessibility-first примитивы |
| **Lucide React** | Latest | Иконки |

## 🚀 Быстрый старт

### Установка зависимостей
```bash
bun install
```

### Запуск в режиме разработки
```bash
bun run dev
```

### Сборка для продакшена
```bash
bun run build
```

### Запуск продакшен версии
```bash
bun start
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📦 Структура проекта

```
landing-page/
├── src/
│   ├── app/
│   │   ├── globals.css      # Глобальные стили и CSS переменные тем
│   │   ├── layout.tsx       # Основной layout с ThemeProvider
│   │   └── page.tsx         # Главная страница
│   ├── components/
│   │   ├── ConsultationDialog.tsx  # Модальное окно консультации
│   │   ├── ThemeToggle.tsx         # Переключатель тем
│   │   └── ui/              # shadcn/ui компоненты
│   ├── contexts/
│   │   └── ThemeContext.tsx # React контекст для управления темами
│   └── lib/
│       └── utils.ts         # Утилиты (cn helper)
├── public/                  # Статические файлы
└── components.json          # Конфигурация shadcn/ui
```

## 🎨 Система тем

### CSS переменные
Каждый бренд имеет собственный набор CSS переменных:

```css
.theme-dciel {
  --primary: 210 100% 45%;     /* Глубокий синий */
  --accent: 195 100% 50%;      /* Электрический голубой */
  /* ... остальные переменные */
}

.theme-ciel {
  --primary: 200 100% 55%;     /* Небесный синий */
  --accent: 185 85% 60%;       /* Мягкий голубой */
  /* ... остальные переменные */
}

.theme-faes {
  --primary: 270 75% 60%;      /* Мистический фиолетовый */
  --accent: 45 90% 55%;        /* Золотой акцент */
  /* ... остальные переменные */
}
```

### Переключение тем
```tsx
const { theme, brand, setTheme, setBrand } = useTheme()

// Переключение светлая/темная
setTheme(theme === 'light' ? 'dark' : 'light')

// Смена бренда
setBrand('dciel' | 'ciel' | 'faes')
```

## 📱 Адаптивность

- **Mobile First** подход
- Брейкпоинты: `sm` (640px), `md` (768px), `lg` (1024px)
- Гибкие сетки и flexbox лейауты
- Оптимизированная типографика для всех экранов

## ♿ Доступность

- Семантическая HTML разметка
- ARIA атрибуты для интерактивных элементов
- Поддержка клавиатурной навигации
- Контрастность цветов соответствует WCAG 2.1

## 🚀 Деплой

Проект автоматически деплоится на Vercel:

**🌐 Live Demo:** [https://mdk-01-c6uj.vercel.app](https://mdk-01-c6uj.vercel.app)

### Для собственного деплоя:
1. Fork репозитория
2. Подключите к Vercel
3. Vercel автоматически определит Next.js проект
4. Деплой происходит при каждом push в main

## 🎯 Возможности для расширения

- [ ] Добавление анимаций с Framer Motion
- [ ] Интеграция с CMS (Strapi, Contentful)
- [ ] Добавление блога
- [ ] Многоязычность (i18n)
- [ ] A/B тестирование лендингов
- [ ] Интеграция с аналитикой
- [ ] PWA функциональность

## 📄 Лицензия

Этот проект создан в образовательных целях.

---

<div align="center">

**Сделано с ❤️ используя Next.js и shadcn/ui**

[🌐 Демо](https://mdk-01-c6uj.vercel.app) • [📧 Контакт](mailto:hello@dciel.ru)

</div>
