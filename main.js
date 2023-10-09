function makeList () {
  return {
    list : [],
    makeSong : makeSong,
    Played : true
  }
  
}


function generateID (){
  counter = 0
  return function() {
    counter++ 
    return counter
  }
}
var id = generateID()

function makeSong (name , artist , genre , source , duration){
  var song = {
    name,
    artist,
    genre,
    source,
    id : id()
  }
  this.list.push(song)
  return song
}


var Thelist = makeList()



Thelist.makeSong("Viva La Vida" , "Coldplay" , "Pop" , "./media/Music/Pop/Coldplay - Viva la Vida (Lyrics).mp3")
 Thelist.makeSong("Bones" , "Imagine Dragons" , "Pop" , "./media/Music/Pop/Imagine Dragons - Bones (Lyrics).mp3")
 Thelist.makeSong("Sunflower" , "Post Malone & Swae Lee " , "Pop" , "./media/Music/Pop/Post Malone, Swae Lee - Sunflower (Lyrics).mp3")
 Thelist.makeSong("Say Amen" , "Panic at the disco!" , "Pop" , "./media/Music/Pop/Say Amen (Saturday Night)  Panic! At The Disco Lyrics.mp3")
 Thelist.makeSong("Hips don't lie" , "Shakira" , "Pop" , "./media/Music/Pop/Shakira - Hips Dont Lie (Lyrics) ft. Wyclef Jean.mp3")
 Thelist.makeSong("Thunderstruck" , "AC/DC" , "Rock" , "./media/Music/Rock/ACDC - Thunderstruck (Official Video).mp3")
 Thelist.makeSong("Dream on" , "Aerosmith" , "Rock" , "./media/Music/Rock/Aerosmith - Dream On (Lyrics).mp3")
 Thelist.makeSong("Welcome to the jungle" , "Gunsn Roses" , "Rock" , "./media/Music/Rock/Gunsn Roses - Welcome to the Jungle ( Studio Version ) High Quality..mp3")
 Thelist.makeSong("In the end" , "Linkin Park" , "Rock" , "./media/Music/Rock/In The End [Official HD Music Video] - Linkin Park.mp3")
 Thelist.makeSong("Don't stop me now" , "Queen" , "Rock" , "./media/Music/Rock/Queen - Dont Stop Me Now (Official Video).mp3")
 Thelist.makeSong("Still D.R.E" , "Dr. Dre" , "HipHop" , "./media/Music/HipHOP/Dr. Dre - Still D.R.E. (Lyrics) ft. Snoop Dogg.mp3")
 Thelist.makeSong("Without Me" , "Eminem" , "HipHop" , "./media/Music/HipHOP/Eminem - Without Me (Lyrics).mp3")
 Thelist.makeSong("Dark Fantasy" , "Kanye West" , "HipHop" , "./media/Music/HipHOP/Kanye West - Dark Fantasy.mp3")
 Thelist.makeSong("Humble" , "Kendrick Lamar" , "HipHop" , "./media/Music/HipHOP/Kendrick Lamar - Humble (Lyrics).mp3")
 Thelist.makeSong("See you again" , "Tyler the creator" , "HipHop" , "./media/Music/HipHOP/Tyler, The Creator - See You Again (Lyrics) ft. Kali Uchis.mp3")
 Thelist.makeSong("Miku" , "Anamanaguchi" , "Jpop" , "./media/Music/Jpop/Anamanaguchi - Miku ft. Hatsune Miku (Lyric Video).mp3")
 Thelist.makeSong("Colors" , "Flow" , "Jpop" , "./media/Music/Jpop/Code Geass Full Opening 1 Colors By Flow.mp3")
 Thelist.makeSong("Race into the night" , "Yoasobi" , "Jpop" , "./media/Music/Jpop/YOASOBI「夜に駆ける」 Official Music Video.mp3")
 Thelist.makeSong("Hikaru nara" , "Goose House" , "Jpop" , "./media/Music/Jpop/Your Lie in April OP Full Hikaru nara by Goose House.mp3")
 Thelist.makeSong("Again" , "Yui" , "Jpop" , "./media/Music/Jpop/YUI - Again (Official Audio).mp3")
 Thelist.makeSong("Polumnia Omnia" , "Hoyo-Mix" , "Peak" , "./media/Music/Peak/Polumnia Omnia.mp3")
 Thelist.makeSong("Desparado" , "ALI" , "Peak" , "./media/Music/Peak/DESPERADO  ALI.mp3")
 Thelist.makeSong("Hayloft II" , "Mother Mother" , "Peak" , "./media/Music/Peak/Mother Mother - Hayloft II (Official Lyric Video).mp3")
 Thelist.makeSong("Love Space" , "Tatsuro Yamashita" , "Peak" , "./media/Music/Peak/Tatsuro Yamashita - Love Space (sub español).mp3")
 Thelist.makeSong("Unknown Mother Goose" , "Wowaka" , "Peak" , "./media/Music/Peak/wowaka 『アンノウン・マザーグース』feat. 初音ミク  wowaka - Unknown Mother-Goose (Official Video) ft. Hatsune Miku.mp3")
 
 
 function play_pause() {
  var audiofile = document.getElementById("audio_file")
   var icon = document.getElementById("play_pause_btn")
 if (Thelist.isPlayed == false) {
     audiofile.play();
     icon.src = "./media/pause.png";
     Thelist.isPlayed = true;
 } else {
     audiofile.pause();
     icon.src = "./media/play.png";
     Thelist.isPlayed = false;
 }
}
 
 $("#play_pause_btn").click (function(){
      play_pause()
  })


 $("#next").click(function() {
  var randomizer = Math.floor(Math.random() * 26)
  console.log(randomizer)
  var audiofile = document.getElementById("audio_file")
  var titleaudio = $("#title_audio")
  Thelist.list.forEach(function(e,i){
    if (i === randomizer){
      titleaudio.text(`${e.name} - ${e.artist}`)
      audiofile.setAttribute("src", `${e.source}`)
      play_pause()
    }
 })
})

$("#back").click(function(){
  var randomizer = Math.floor(Math.random() * 26)
  console.log(randomizer)
  var audiofile = document.getElementById("audio_file")
  var titleaudio = $("#title_audio")
  Thelist.list.forEach(function(e,i){
    if (i === randomizer){
      titleaudio.text(`${e.name} - ${e.artist}`)
      audiofile.setAttribute("src", `${e.source}`)
      play_pause()
    }
})
})

$("#searchTool").on("click", function () {
  var titleaudio = $("#title_audio")
  var audiofile = document.getElementById("audio_file")
  var value = $("#search").val();
  var filtered = Thelist.list.filter(function (item) {
    return item.name.toLowerCase().includes(value.toLowerCase()) || item.artist.toLowerCase().includes(value.toLowerCase())
  });
 filtered.forEach(function(e,i){
  titleaudio.text(`${e.name} - ${e.artist}`)
  audiofile.setAttribute("src", `${e.source}`)
  play_pause()
 })
});



 class Volume {
  constructor() {
      this.audio_file = document.getElementById("audio_file");
      this.audio_file.volume = 50 / 100;
      this.volume_range = document.getElementById("volume_range");
      this.volume_range.addEventListener("change", () => {
          this.audio_file.volume = this.volume_range.value / 100;
      });
      this.speed_range = document.getElementById("speed_range");
      this.speed_range.addEventListener("change", () => {
          this.audio_file.playbackRate = this.speed_range.value / 100;
      });

  }
}
onload = new Volume();