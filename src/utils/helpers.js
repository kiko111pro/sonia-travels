//To truncate a string(str) to fixed number(num) of words
//ReturnType - OBJECT
export const truncateString = (str, num) => {
  return {
    truncatedString: str.substring(0, num),
    isTruncated: str.substring().length > num, //To decide if we need to display "Read More +" button after text
  };
};
