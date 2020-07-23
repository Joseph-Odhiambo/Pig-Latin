// 1. vowels add ey at the end
// 2. words begining consonants e.g. read, bread, move consonsnts to the end...add ay
// 3. qu move the u with q. e.g queue, query...eyequey addition squell
// 4. for word begining with y treat y as a consonant

//- Specs
// creat a function that takes in a word
// have local scope array
// loop through the word we have been given
// check for only laters of the alphabet
// if words begine with vowels add ay
// else if word begins with 2 consonant or begines with qu move to end then add ay
// else if it begins with 3 consonants or squ move first 3 latters to the end then add ay
// else if it begins a consonant we move first latter to the end then add ay


var pigLatin = function(wordParameter){
    console.log(wordParameter);
    var latin = [];
    var words = wordParameter.split();

    words.forEach(function(word){
        if(word.match(/\D/)){
            if (word.match(/^[aeiou]/i)){
                word = word + "ay";
                latin.push(word);
                return latin;
            }
            else if ((word.match(/^squ/i)) || (word.match(/^[b-df-h-np-tv-z][b-df-h-j-np-tv-z][b-df-h-j-np-tv-z]/i))){
                var pigWord = word.slice(0, 3);
                var pigWord = word.slice(3, word.length);
                word = pigWord2 + pigWord + "ay";
                latin.push(word);
                return latin;
            }
            else if ((word.match(/^qu/i)) || (word.match(/^[b-df-h-np-tv-z][b-df-h-j-np-tv-z]/i))){
                var pigWord = word.slice(0, 2);
                var pigWord = word.slice(2, word.length);
                word = pigWord2 + pigWord + "ay";
                latin.push(word);
                return latin;
            }
            else {
                var pigWord = word.slice(0, 1);
                var pigWord2 = word.slice(1, word.length);
                word = pigWord2 + pigWord + "ay";
                latin.push(word);
                return latin;
            }
        }
        else {
            alert ("enter latters only....")
        }
    });
    return latin.join(" ");
};

var word = prompt ("enter a word..."); 
// alert(pigLatin(word));
$("#wordParameter").html(pigLatin(word));
