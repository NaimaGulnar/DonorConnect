# DonorConnect

DonorConnect is a web platform designed to connect individuals in urgent need of blood with generous donors. 

The mission is simple - "To bridge the gap between blood recipients and blood donors seamlessly and efficiently".

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Installation](#installation)
- [Authors](#authors)

## Features

- Easy registration for donors and recipients.
- Instant alerts to notify donors about urgent blood needs.
- Efficient coordination between donors and recipients.
- Gratitude system to acknowledge successful donations.

## Technologies Used

### Frontend

- ReactJS

### Backend 

- Django REST Framework

## Deployment

- Frontend: Netlify
- Backend: PythonAnywhere

## Installation

### Prerequisites

- Node.js
- Python
- Git

### Frontend Setup

1. Clone the repository:
    ```
    git clone https://github.com/NaimaGulnar/DonorConnect.git
    cd DonorConnect/frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

### Backend Setup

1. Navigate to the `DonorConnect` directory:
    ```sh
    cd ../
    ```

2. Create a virtual environment and activate it:
    ```sh
    python -m venv env
    env\Scripts\activate  # for Windows user
    source env/bin/activate  # for Linux user
    ```

3. Create a `.gitignore` file inside `env` folder and write inside it:
    ```
    *
    ```

4. Navigate to the backend folder and install dependencies:
    ```sh
    cd backend
    pip install -r requirements.txt
    ```

5. Set up the environment variables:

    - Create a `.env` file in the `backend` directory (where `manage.py` is located) and ensure you have the following variables set. Replace the placeholder information with your actual data:
        ```
        SECRET_KEY=your_secret_key_here
        EMAIL_HOST_USER=your_email@example.com
        EMAIL_HOST_PASSWORD=your_email_password
        EMAIL_PORT=587
        ```

6. Apply migrations and start the server:
    ```sh
    python manage.py migrate
    python manage.py runserver
    ```

## Authors

- [NaimaGulnar](https://www.github.com/NaimaGulnar)
- [Muskan-FATIMA](https://www.github.com/Muskan-FATIMA)
