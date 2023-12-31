# Guitar_Tuner_-_String_finder-

## How To Use :
Step 1 - Clone it  
Step 2 - Start a live server  

## How it Works :

It might look complex until you figure it out.  
It uses pitch, as it may not seems so but there is Physics in the Music, specially when we talk about string instruments.  
The tuning, the tension in the strings and the length, etc. Lets not go beyound whats necessary.  
The strings when vibrate they produce sound, and every string produce different sound.  
Here we will not talk about amplitude or wave form, But a simple distinguished factor Pitch.  
The pitch vary depending on strings, (ignoring other factors).  

### String frequencies of standard tuning

String | Frequency  |  Scientific Pitch Notation
-------| -----------| ----------
1 (E)	 | 329.63 Hz	| E4
2 (B)	 | 246.94 Hz	| B3
3 (G)	 | 196.00 Hz	| G3
4 (D)	 | 146.83 Hz	| D3
5 (A)	 | 110.00 Hz	| A2
6 (E)	 | 82.41 Hz   | E2

As we can see above, I used the standard one for this project.(I'm thing of adding more options in the future)  
I used the Pitch Detection Model here, (The link is in js file).  
Now the model compares the pitches with the Standard notation, draw out the result.  

# I was about to make it usable with real life fuctionality but got stuck with exams and all keeping the database link here for future use, if any.

Guitar Only
===========

Database containing 2000 recordings of 10 guitar chords. This database is
well suited for the learning phase of a machine learning algorithm.

For each chord, there are 200 wav files sampled at 44.100 Hz and quantized at
16 bits.

100 first chords are recorded in an anechoic chamber and the 100 last are
recorded in a noisy room. 
Four guitar were used : 

WAV files:

[1-25]   : Guitar 1         
[26-50]  : Guitar 2
[51-75]  : Guitar 3
[76-100] : Guitar 4 

Other Instruments
=================

Database containing chords recording with four instruments: Guitar, Piano, 
Violin and Accordion.

For each instruments, there are 100 recordings, distributed in 10 chords 
(10 recordings per chord). All chords were recorded in a noisy room and with a 
single instrument.

This database is well suited as a test set for a machine learning algorithm
(it was designed for that).

Didnt want to use LFS, so drive link.

https://drive.google.com/drive/folders/1aocezgm2qUUZDWAIQLtll22S4O4zSRTp?usp=drive_link


