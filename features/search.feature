Feature: Movie tickets

    Scenario: happy path1
        Given go to the page "/index.php"
        When choose day 3
        When choose a time
        When choose 1 row 2 seat
        Then the inscription appeared Вы выбрали билеты:

    Scenario: happy path2
        Given go to the page "/index.php"
        When choose day 3
        When choose a time
        When choose 1 row 3,5,7 seat
        Then the inscription appeared Вы выбрали билеты:
    
    Scenario: sad path
        Given go to the page "/index.php"
        When choose day 3
        When choose a time
        When choose 1 row 10 seat
        When press the button Получить код бронирования
        When go back to the page "/index.php"
        When choose day 3
        When choose a time
        When choose again 1 row 10 seat
        Then the button Забронировать is not active 