## Plan 
* Create issues on github feature tracking 
* Find database/api for animals
  * ~~Write simple thing to get image~~
  * ~~pass arguments to get specific image.~~
  * ~~Get image from rand category.~~
  * ~~Add different breeds to different cards~~
  * ~~Scoring and reloading~~
    * ~~onClick of anycard => reload api~~
  * Timer functionality 
    * ~~make timer wait till everything is loaded.~~
    * ~~add timer using setTimeout()~~
* Randomize position of answer
* Add game UI
  * ~~Start screen~~
  * Highscore screen
    * ~~save highscore to local storage~~
    * add unique key to each list
* Add card layout
  * Add conditional border highlight on click
* Create mockup on figma
  * game dynamic    
    * timer
      * levels of less seconds 
      * variety of breeds (not just one)
      * * highscore of number of points
    * number


TODO
* randomizing other choices
* Go back to home from game screen
* border color of correct choice
rottweiler, retriever, chihuahua, germanshepherd, labrador, irish terrier, yorkshire terrier, tibetan mastiff pitbull, shiba, dachshund, cocker spaniel, english springer, border collie
Once game is over: 
* show different UI screen saying Game Over, your score was x
  * add return to home button
* update highscore logic (your score was blah)

~~local storage~~
authd
* personal best 
  * saved to firestore 
  * shown to user
  * 
* 
* past scores saved  - state 
* highscore attached to uuid saved to firestore 
* reload - start afresh
* close - highscore kept

Pre-publish checklist
[] Have removed debug statements like console.log 

when round is over - fetch new images 

showGame - whether to show game or not 
isRoundOn - 

Bugs
* timer starts before all dogs are on the page 
* Reloading removes stats 

* add persistence 
```js
enableIndexedDbPersistence(db).catch((err) => {
    if (err.code == "failed-precondition") {
        console.log("failed-precondition");
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
    } else if (err.code == "unimplemented") {
        console.log("unimplemented");
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
    }
});
```