## Redux Cart — Лабораторная работа №6

## Описание
Интернет-магазин с корзиной, реализованной с помощью **Redux Toolkit** и **RTK Query**.  
Проект выполнен в рамках лабораторной работы №6 по дисциплине "Разработка веб-приложений с использованием React".

##  Цели лабораторной
- Освоить концепцию **глобального состояния** в React
- Научиться использовать **Redux Toolkit** и **RTK Query**
- Реализовать функциональность корзины: добавление, удаление, изменение количества
- Сохранять состояние в **localStorage**
- Загружать данные с сервера (**MockAPI**)

##  Стек технологий
- React
- Redux Toolkit
- RTK Query
- MockAPI
- Vite

##  Функциональность
- Загрузка товаров с MockAPI (`GET /products`)
- Добавление товара в корзину
- Удаление товара из корзины
- Изменение количества товара
- Отображение количества товаров в шапке
- Сохранение корзины в `localStorage`
- Восстановление корзины при загрузке страницы

## Структура проекта
![image](https://github.com/user-attachments/assets/8c1bc710-b86e-4bad-b840-7fe7a99d9d2a)





##  Как запустить проект

1. Установить зависимости:
```bash
npm install
```
Запустить локальный сервер:

```bash
npm run dev
```
Перейти в браузере по адресу:

http://localhost:5173

Используется публичный MockAPI:
https://6848a7afec44b9f3494193f5.mockapi.io/products

 Скриншот интерфейса

![image](https://github.com/user-attachments/assets/41e679ff-fb5c-49a2-be8b-213bfc014b69)


✅ Выполненные задания
 Настройка Redux Toolkit Store

 Создание слайса cart

 Компонент CartPage

 Использование селекторов через actions.js

 Отображение количества товаров в шапке

 Сохранение состояния корзины в localStorage

 Загрузка товаров с сервера через RTK Query

 
## Ответы на вопросы:

1.Что такое глобальное состояние и зачем оно нужно?
Глобальное состояние — это данные, которые доступны разным компонентам приложения.
Оно нужно, чтобы избежать "прокидывания" данных через props и централизованно управлять, например, корзиной, пользователем, темой и т.д.

2.Что такое Redux Toolkit и как он упрощает работу с глобальным состоянием?
Redux Toolkit (RTK) — это официальная библиотека от Redux, которая:

убирает шаблонный код,

делает конфигурацию проще,

добавляет удобные методы (createSlice, createAsyncThunk, RTK Query),

делает Redux быстрым и удобным даже для новичков.

3.Что такое слайсы и как они помогают организовать код?
Слайс (slice) — это часть глобального состояния + логика, собранные в одном месте:

включает initialState, reducers, actions

каждый слайс отвечает за одну область (например, cart, auth, products)

помогает структурировать проект модульно и понятно


