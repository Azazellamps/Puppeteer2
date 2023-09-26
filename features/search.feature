Feature: Movie tickets

    Scenario: happy path1
        Given go to the page https://qamid.tmweb.ru/client/index.php
        When choose day 5
        When choose a time
        When choose 1 row 2 seat
        Then the inscription appeared "Зверополис"

    Scenario: happy path2
        Given go to the page https://qamid.tmweb.ru/client/index.php
        When choose day 5 
        When choose a time
        When choose 1 row 3,5,7 seat
        Then the inscription appeared "Вы выбрали билеты"
    
    Scenario: sad path
        Given go to the page https://qamid.tmweb.ru/client/index.php
        When choose day 5
        When choose a time
        When choose 1 row 10 seat
        When press the button "Получить код бронирования"
        When go back to the page https://qamid.tmweb.ru/client/index.php
        When choose day 5
        When choose a time
        When choose 1 row 1 seat
        Then the button "Забронировать" is not active  