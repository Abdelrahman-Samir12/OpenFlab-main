var b_m_slideshow = new JSAV("container");

var the_string = b_m_slideshow.ds.array(['s','t','i','n','g']);
var the_string_label = b_m_slideshow.label("string", {before: the_string});
b_m_slideshow.umsg("In addition to the MMC Array the Boyer-Moore Algorithm also uses an alignment array that is somewhat similar to the one used by the KMP algorithm. This slideshow will demonstrate how that array is constructed. There will be two examples in this slideshow.");
b_m_slideshow.displayInit();
b_m_slideshow.step();

b_m_slideshow.umsg("We first have to note that the Boyer-Moore algorithm begins its comparisons at the end of the substring. This means that are jumps are going to be pretty large because from the current position we have to move forward far enough to ensure that the last character is lined up to where it should be.");
var align_array = b_m_slideshow.ds.array([' ', ' ', ' ', ' ', ' ']);
var align_array_label = b_m_slideshow.label("align", {before: align_array});
b_m_slideshow.step();

b_m_slideshow.umsg("The pseudo code that is now shown will serve as the guidelines for how the value at a specific index is computed, there are really only two cases...");
var align_pseudo = b_m_slideshow.code("p = current_index \nsuffix_length = length of the suffix of string beginning at p+1 \noffset = least amount that the suffix must be moved left to match another occurance of itself without matching character in string[p] \nif p = string.length()-1 then: \n\talign[p] = 1 \nelse \n\talign[p] = suffix_length + offset", {before: the_string_label});
b_m_slideshow.step();

b_m_slideshow.umsg("Let it also be known that p decrements throughout this algorithm, working its way from string.length()-1 to 0.");
b_m_slideshow.step();

b_m_slideshow.umsg("The first value of the alignment array is filled in with ease given this pseudo code...");
align_array.value(4, '1');
align_array.highlight(4);
align_pseudo.highlight(4);
b_m_slideshow.step();

b_m_slideshow.umsg("The next value get a little more tricky, the suffix is = 1 because there is only one unique character proceding the current index. We also note that offset = 5 because you would need to shift the suffix ('g') 5 characters to the left to satisfy the requirements. Remember that the suffix starts at string[p+1]...");
align_pseudo.unhighlight(4);
align_array.unhighlight(4);
b_m_slideshow.step();

b_m_slideshow.umsg("align[3] = 1 + 5");
align_array.value(3, '6');
align_array.highlight(3);
align_pseudo.highlight(6);
b_m_slideshow.step();

b_m_slideshow.umsg("We now enter the second case again and see that suffix = 2, and since there are not matching suffixes left of where this suffix occurs our offset is 5, because we would still have to move 'ng' over 5 characters to satisfy the requirements.");
align_array.unhighlight(3);
align_pseudo.unhighlight(6);
b_m_slideshow.step();

b_m_slideshow.umsg("align[2] = 2 + 5");
align_array.value(2, '7');
align_array.highlight(2);
align_pseudo.highlight(6);
b_m_slideshow.step();

b_m_slideshow.umsg("We enter the second case again and see that suffix = 3, and since there are not matching suffixes left of where this suffix occurs our offset is 5, because we would still have to move 'ing' over 5 characters to satisfy the requirements.");
align_array.unhighlight(2);
align_pseudo.unhighlight(6);
b_m_slideshow.step();

b_m_slideshow.umsg("align[1] = 3 + 5");
align_array.value(1, '8');
align_array.highlight(1);
align_pseudo.highlight(6);
b_m_slideshow.step();


b_m_slideshow.umsg("We enter the second case again and see that suffix = 4, and since there are not matching suffixes left of where this suffix occurs our offset is 5, because we would still have to move 'ting' over 5 characters to satisfy the requirements.");
align_array.unhighlight(1);
align_pseudo.unhighlight(6);
b_m_slideshow.step();

b_m_slideshow.umsg("align[0] = 4 + 5");
align_array.value(0, '9');
align_array.highlight(0);
align_pseudo.highlight(6);
b_m_slideshow.step();

b_m_slideshow.umsg("We note that we filled our alignment array and we have finished the algorithm for this case. Hopefully it is now pretty trivial to compute the alignment array for strings without repeating substrings. Lets do a more interesting example to ensure that this alignment array concept is understood.");
align_array.unhighlight(0);
align_pseudo.unhighlight(6);
b_m_slideshow.step();



b_m_slideshow.umsg("We will now look at a slightly more interesting string.");
var temp_new_string = ['a', 'b', 'a', 'b', 'a'];
for(var i = 0; i < the_string.size(); i++) {
    the_string.value(i, temp_new_string[i]);
    align_array.value(i, ' ');
}
b_m_slideshow.step();

b_m_slideshow.umsg("The first step is trivial as always... the last location is set to 1 every time.");
align_array.value(4, '1');
align_pseudo.highlight(4);
b_m_slideshow.step();

b_m_slideshow.umsg("We now note that suffix = 1 because the length of 'a' is 1. We also note that offset = 2 because you would have to move 'a' left twice to match the suffix.");
align_pseudo.unhighlight(4);
b_m_slideshow.step();

b_m_slideshow.umsg("align[3] = 1 + 2");
align_array.value(3, '3');
align_array.highlight(3);
align_pseudo.highlight(6);
b_m_slideshow.step();


b_m_slideshow.umsg("We now note that suffix = 2 because the length of 'ba' is 2. We also note that offset = 2 because you would have to move 'ba' left twice to match itself.");
align_array.unhighlight(3);
align_pseudo.unhighlight(6);
b_m_slideshow.step();

b_m_slideshow.umsg("align[2] = 2 + 2");
align_array.value(2, '4');
align_array.highlight(2);
align_pseudo.highlight(6);
b_m_slideshow.step();

b_m_slideshow.umsg("We now note that suffix = 3 because the length of 'aba' is 3. We also note that offset = 2 because you would have to move 'aba' left twice to match itself.");
align_array.unhighlight(2);
align_pseudo.unhighlight(6);
b_m_slideshow.step();

b_m_slideshow.umsg("align[1] = 3 + 2");
align_array.value(1, '5');
align_array.highlight(1);
align_pseudo.highlight(6);
b_m_slideshow.step();

b_m_slideshow.umsg("We now note that suffix = 4 because the length of 'baba' is 4. We also note that offset = 5 because 'baba' doesn't occur earlier in the string so you must shift it all the way over.");
align_array.unhighlight(1);
align_pseudo.unhighlight(6);
b_m_slideshow.step();

b_m_slideshow.umsg("align[0] = 4 + 5");
align_array.value(0, '9');
align_array.highlight(0);
align_pseudo.highlight(6);
b_m_slideshow.step();

b_m_slideshow.umsg("Our alignment array is now filled.");
align_array.unhighlight(0);
align_pseudo.unhighlight(6);


b_m_slideshow.recorded();