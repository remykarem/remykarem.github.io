
const FATHA = 'َ';
const DHAMMA = 'ُ';
const KASRA = 'ِ';

const ALIF_SEAT_TOP = 'أ';
const ALIF_SEAT_BOTTOM = 'إ';
const WAW_SEAT = 'ؤ';
const YAA_SEAT = 'ئ';

const hamza = 'ء';

// var romanText = document.querySelector('.romanText');
// var submitButton = document.querySelector('.romanTextSubmit');
// var clearButton = document.querySelector('.romanTextClear');

// var outputText = document.querySelector('.output');

const transliterate = (romanText: string, withVowels: boolean = false) => {
    let final = " " + romanText;
    // if (final.substring(0,1) === 'i')



    // standardise variations
    final = final.concat(" ")

        .replace(/[\u201C]/g, "\"").replace(/[\u201D]/g, "\"")
        .replace(/[\u2018]/g, "\'").replace(/[\u2019]/g, "\'")

        // standardisation
        .replace(/el-|Al-/g, 'al-')

        .replace(/ee/g, 'ii')
        .replace(/ou/g, 'uu')
        .replace(/oo/g, 'uu')
        .replace(/e/g, 'i')
        .replace(/o/g, 'u')

        .replace(/S/g, '9')
        ;

    // Need to decide what to replace hamza with
    // var hamzaReplacement = processOneHamza(final);

    final = final
        // Special words
        .replace(/allad'ii/g, 'الذي')
        .replace(/2ana/g, 'أَنا')
        .replace(/billah/g, 'biallah')
        .replace(/allah/g, 'الله')
        .replace(/lillah/g, 'لله')
        .replace(/had'a/g, 'هذا')
        .replace(/d'alik/g, 'ذلك')
        .replace(/allad'iina/g, 'الذين')

        .replace(/\*/g, 'ْ')

        .replace(/\(2i\)/g, 'إِ')
        .replace(/\(2a\)/g, 'أَ')
        .replace(/\(2u\)/g, 'أُ')
        .replace(/ i/g, ' اِ')
        .replace(/ 2aa/g, 'آ') // takes care of first words too
        .replace(/ 2a/g, ' أَ') // takes care of first words too
        .replace(/ 2u/g, ' أُ') // takes care of first words too
        .replace(/ 2i/g, ' إِ') // takes care of first words too
        .replace(/al-2aa/g, 'الآ') // takes care of first words too
        .replace(/al-2a/g, 'الأَ') // takes care of first words too
        .replace(/al-2u/g, 'الأُ') // takes care of first words too
        .replace(/al-2i/g, 'الإِ') // takes care of first words too

        .replace(/aa2a /g, 'aa' + hamza + 'a ')
        .replace(/aa2i /g, 'aa' + hamza + 'i ')
        .replace(/a2i/g, 'a' + YAA_SEAT + 'i')
        .replace(/u2i/g, 'u' + YAA_SEAT + 'i')
        .replace(/i2i/g, 'i' + YAA_SEAT + 'i')
        .replace(/i2a/g, 'i' + YAA_SEAT + 'a')
        .replace(/a2a/g, 'a' + ALIF_SEAT_TOP + 'a')
        .replace(/u2a/g, 'u' + WAW_SEAT + 'a')
        .replace(/u2/g, 'u' + WAW_SEAT)
        .replace(/a2/g, 'a' + ALIF_SEAT_TOP)
        .replace(/i2/g, 'i' + YAA_SEAT)
        .replace(/2u/g, WAW_SEAT + 'u')

        // Long vowels (must come first)
        .replace(/A\^|aa\^/g, 'َى')
        .replace(/aa/g, 'َا')
        .replace(/ii/g, 'ِي')
        .replace(/uu/g, 'ُو')

        // Diphthongs
        .replace(/ai/g, 'َيْ')
        .replace(/ei/g, 'َيْ')
        // .replace(/ay/g, 'َيْ')
        .replace(/au/g, 'َوْ')

        // al- and shamsiya letters
        .replace(/al-t'/g, 'al-t\'t\'')
        .replace(/t't'/g, 'ثّ')

        .replace(/al-dz/g, 'al-dzdz')
        .replace(/dzdz/g, 'ذّ') //
        .replace(/al-d'/g, 'al-d\'d\'')
        .replace(/d'd'/g, 'ذّ') //

        .replace(/al-s'/g, 'al-s\'s\'')
        .replace(/s's'/g, 'شّ')

        .replace(/al-9'/g, 'al-9\'9\'')
        .replace(/9'9'/g, 'ضّ')

        .replace(/al-d/g, 'al-dd')
        .replace(/al-t/g, 'al-tt')
        .replace(/al-s/g, 'al-ss')
        .replace(/al-r/g, 'al-rr')
        .replace(/al-z/g, 'al-zz')
        .replace(/al-9/g, 'al-99')
        .replace(/al-T/g, 'al-TT')
        .replace(/al-Z/g, 'al-ZZ')
        .replace(/al-n/g, 'al-nn')

        .replace(/bil-/g, 'bial-')
        .replace(/al-/g, 'ال')


        // Vowels
        .replace(/aN|AN/g, 'ًا')
        .replace(/uN/g, 'ٌ')
        .replace(/iN/g, 'ٍ')
        .replace(/a/g, 'َ')
        .replace(/i/g, 'ِ')
        .replace(/e/g, 'ِ')
        .replace(/u/g, 'ُ')
        .replace(/o/g, 'ُ')
        .replace(/\|/g, 'ا') // silent alif for verbs

        // Shaddated consonants
        .replace(/bb/g, 'بّ')
        .replace(/tt/g, 'تّ')
        .replace(/jj/g, 'جّ')
        .replace(/77/g, 'حّ')
        .replace(/55/g, 'خّ')
        .replace(/dd/g, 'دّ')
        .replace(/rr/g, 'رّ')
        .replace(/zz/g, 'زّ')
        .replace(/ss/g, 'سّ')
        .replace(/99/g, 'صّ')
        .replace(/TT/g, 'طّ')
        .replace(/ZZ/g, 'ظّ')
        .replace(/ghgh/g, 'غ')
        .replace(/33/g, 'عّ')
        .replace(/ff/g, 'فّ')
        .replace(/qq/g, 'قّ')
        .replace(/kk/g, 'كّ')
        .replace(/ll/g, 'لّ')
        .replace(/mm/g, 'مّ')
        .replace(/nn/g, 'نّ')
        .replace(/ww/g, 'وّ')
        .replace(/hh/g, 'هّ')
        .replace(/yy/g, 'يّ')

        // Consonants
        .replace(/A/g, 'ا')
        .replace(/b/g, 'ب')
        .replace(/t'/g, 'ث')
        .replace(/t"/g, 'ة')
        .replace(/t/g, 'ت')
        .replace(/j/g, 'ج')
        .replace(/7/g, 'ح')
        .replace(/5/g, 'خ')
        .replace(/dz/g, 'ذ')
        .replace(/d'/g, 'ذ')
        .replace(/d/g, 'د')
        .replace(/r/g, 'ر')
        .replace(/z/g, 'ز')
        .replace(/s'/g, 'ش')
        .replace(/s/g, 'س')
        .replace(/9'/g, 'ض')
        .replace(/9/g, 'ص')
        .replace(/T/g, 'ط')
        .replace(/Z/g, 'ظ')
        .replace(/gh/g, 'غ')
        .replace(/3/g, 'ع')
        .replace(/f/g, 'ف')
        .replace(/q/g, 'ق')
        .replace(/k/g, 'ك')
        .replace(/l/g, 'ل')
        .replace(/m/g, 'م')
        .replace(/n/g, 'ن')
        .replace(/w/g, 'و')
        .replace(/h/g, 'ه')
        .replace(/2/g, 'ء') // others
        .replace(/y/g, 'ي')

        // Punctuation
        .replace(/\?/g, '؟')

        // TODO not showing period at the correct position
        .replace(/\./g, '.');


    // final = processHamza(final);

    // outputText.textContent = final;

    if (!withVowels) {
        final = removeShaddah(removeVowels(final));
    }

    return removeAlphabet(final);

}

// function clearText() {
//     romanText = "";
// }

const removeVowels = (input: string): string => {
    return input.replace(/َ/g, '').replace(/ِ/g, '').replace(/ُ/g, '')
        .replace(/ً/g, '').replace(/ٍ/g, '').replace(/ٌ/g, '')
        .replace(/ْ/g, '')
}

const removeAlphabet = (input: string): string => {
    return input.replace(/[a-zA-Z]/g, '');
};



// for one instance
const processOneHamza = (input: string) => {

    var n = input.indexOf(hamza);
    console.log(n);
    if (n === -1) {
        console.log('no hamza');
        return input;
    } else {
        console.log('hamza exists');

        // first position
        var minus2 = input.charAt(n - 2);
        var minus1 = input.charAt(n - 1);
        var plus1 = input.charAt(n + 1);

        console.log(minus2);
        console.log(minus1);
        console.log(plus1);

        switch (minus1) {
            case FATHA: input.replace('', ''); break;
            case KASRA: ;
        }

        console.log('input is ' + input);

        return input;
    }
}

// submitButton.addEventListener('click', transliterate);
// clearButton.addEventListener('click', clearText);

export default transliterate;

const removeShaddah = (input: string) => {
    return input.replace(/ّ/g, '');
}