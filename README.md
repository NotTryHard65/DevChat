# DevChat

Простой веб-мессенджер

> [!WARNING]
> This is a WIP project, anything can be changed and/or broken without any notification beforehand

## Технологии

### Фронтэнд

- HTML + CSS
- [Vanilla JS SPA](https://github.com/zathio/vanilla-spa)
- RESTful API + WebSockets

### Бэкэнд

- FastAPI + WebSockets
- SQLModel + Alembic
- AioSQLite

## Запуск проекта

### Фронтэнд

```bash
bun run dev
```

### Бэкэнд

```bahs
uv run python src/main.py
```

### Docker

Полный запуск проекта в docker контейнере ещё находится в разработке

## Структура БД

```mermaid
erDiagram 
    User ||--o| File : avatar
    User ||--o{ ChatMember : user_id
    User ||--o{ Message : author

    Chat ||--o| File : avatar
    Chat ||--o{ ChatMember : chat_id
    Chat }|--|| Conversation : conversation_id

    Direct }|--|| Conversation : conversation_id
    Direct }o--|| User : user_one
    Direct }o--|| User : user_two

    Conversation ||--o{ Message : conversation_id

    Message ||--o{ MessageFile : message_id
    MessageFile }o--|| File : file_id

    User {
        id uuid pk
        username string
        first_name string
        last_name string
        email string
        phone string
        avatar uuid fk
        bio text
        created_at datetime
        last_online datetime
    }

    Conversation {
        id uuid pk
        type enum "chat | direct"
    }

    Chat {
        id uuid pk
        conversation_id uuid fk
        name string
        owner uuid fk
        avatar uuid fk
    }

    Direct {
        id uuid pk
        conversation_id uuid fk
        user_one uuid fk
        user_two uuid fk
    }

    ChatMember {
        chat_id uuid fk
        user_id uuid fk
        role enum "owner | admin | member"
        can_send bool
        can_edit bool
        can_delete bool
        can_pin bool
        can_moderate bool
        joined_at datetime
    }

    Message {
        id int64 pk
        conversation_id uuid fk
        author uuid fk
        text string
        reply_to int64 fk
        is_pinned bool
        created_at datetime
        updated_at datetime
    }

    MessageFile {
        message_id int64 fk
        file_id uuid fk
        position int
    }

    File {
        id uuid pk
        uploaded_by uuid fk
        name string
        mime_type string
        size int
        
        %% http://localhost:8000/files/{user_id}/{file_id}.{extension}
        %% http://localhost:8000/photos/{user_id}/{file_id}.{png|webp|jpg}
        %% http://localhost:8000/videos/{user_id}/{file_id}_{quality}.m3u8
    }
```

## Список ToDo:
- [x] Планирование и структура проекта
  - [x] ER-диаграмма
  - [x] Технологии
  - [x] Дизайн
- [ ] Сборка в docker
- [ ] Базовый фронтэнд
  - [ ] Страницы
    - [ ] Главная
    - [ ] Авторизация
    - [ ] Регистрация
    - [ ] Профиль
    - [ ] Настройки
    - [ ] Список чатов
    - [ ] Личные сообщения
    - [ ] Групповой чат
  - [ ] Логика работы
    - [ ] Поиск пользователей
    - [ ] Отправка сообщения
    - [ ] Изменение сообщения
    - [ ] Удаление сообщения
    - [ ] Получение списка сообщений
    - [ ] Получение уведомлений
    - [ ] Присоединение к группе
    - [ ] Удаление из группы
    - [ ] Управление правами пользователя
    - [ ] Изменение настроек
- [ ] Базовый бэкэнд
  - [ ] Эндпоинты
    - [ ] Проверка версии и работоспособности
    - [ ] Регистрация, авторизация и CAPTCHA
    - [ ] Отправка страниц фронтэнда
    - [ ] Обработка статики
  - [ ] События сокета
    - [ ] Изменение профиля
    - [ ] Поиск пользователей
    - [ ] Отправка сообщения
    - [ ] Изменение сообщения
    - [ ] Удаление сообщения
    - [ ] Присоединение к группе
    - [ ] Удаление из группы
    - [ ] Управление правами пользователя
- [ ] Миграции базы данных
