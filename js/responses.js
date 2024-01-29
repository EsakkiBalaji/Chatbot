function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || input == "hi" || input == "hey") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "bye") {
        return "Talk to you later!";
    } else if (input == "what is your name" || input == "name") {
        return "My Name is ChatBot!";
    }
    else if (input == "what is your age" || input == "age") {
        return "I am 3 years old!";
    }
    else if (input == "what is your owner" || input == "owner") {
        return "My Owner is Esakki Balaji!";
    } else {
        return "Try asking something else!";
    }

}
