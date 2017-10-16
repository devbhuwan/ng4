# ng4 [![Build Status](https://travis-ci.org/devbhuwan/ng4.svg?branch=master)](https://travis-ci.org/devbhuwan/ng4)

* Ng4-Core
- Logging + Translation
```
cd ng4-core
npm install
ng serve
```

* Ng4-Bpm
- Used ng4-core as dependency
- Contains own module translation file

```
cd ng4-bpm
npm install
ng serve
```

* Generator-Ng4
- Generator for ng4 module strucutre having ng4-core module dependency using this
  generator we can easily generator our custom module. 

```
npm install -g yo
cd generator-ng4
npm install
npm link
yo ng4
```


     _-----_     
    |       |    ╭──────────────────────────╮
    |--(o)--|    │    Welcome to the epic   │
   `---------´   │ generator-ng4 generator! │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

? What's the name of your component? 
