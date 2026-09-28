# Dictionary App

This project has the basic functionality of a typical dictionary which allows the user to input a word into the search box and receive information about the word (if available). This program also incorporates other functionality found in established dictionary applications such as Word of the Day, Random Word Search, Word Games, and Study Tools. This is achieved through the utilization of several third-party APIs including two random word generator APIs as well as a dictionary API which provides the information about the given word.

![Static Badge](https://img.shields.io/badge/HTML-%23e34c26?style=for-the-badge&logo=HTML5&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS-%231572B6?style=for-the-badge&logo=CSS&logoColor=white)
![Static Badge](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white)
![Static Badge](https://img.shields.io/badge/TypeScript-%233178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Static Badge](https://img.shields.io/badge/React-%2361DBFB?style=for-the-badge&logo=react&logoColor=black)
![Static Badge](https://img.shields.io/badge/Vite-%236b1eb9?style=for-the-badge&logo=vite&logoColor=white)
![Static Badge](https://img.shields.io/badge/TailwindCSS-%2338BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)

> **Disclaimer**: The [Free Dictionary API](https://dictionaryapi.dev/) and [Random Words API](https://random-words-api.kushcreates.com/) are the primary APIs used throughout the development of this application. Given these third-party APIs are free, please be advised that the quality of the words generated and the volume of information provided for the certain words may vary depending on the user's input. Thank you for your understanding. 

## Features
### Dictionary | Search & Define
The purpose of this program is to enrich, deepen, and expand the user's vocabulary; therefore, the search and define functionality serves as the core part of the application. This core feature consists of the following subfeatures:
- [x] `User-Defined Word Search` : Base feature of the program which allows the user to input a word into the search box and receive additional information about the word (if available).
- [ ] `Random Word Search` : Supplemental feature that generates a random word of mid to high difficulty and provides information about the word when a specific button is clicked. It works similarly to the **User-Defined Word Search** except the word is generated randomly instead of input by the user and the response is evaluated to ensure there is a decent amount of information associated with the word before being displayed.
- [ ] `Word of the Day` : Supplemental feature of the program that highlights a random word of mid to high level difficulty. The main difference between this and the previous feature is the random word chosen for the **Word of the Day** stays the same throughout the day while the state of the **Random Word Search** changes every time the request is made.

If available, the following information pertaining to the given or random input will be provided:
* Phonetics: The scientific study of human speech sounds. 
* Definition(s): The exact meaning(s) of a word depending on the context and part of speech.
* Synonyms: A word or phrase that has the same or nearly the same meaning as another word.
* Antonyms: A word or phrase that has the opposite or nearly the opposite meaning as another word.
