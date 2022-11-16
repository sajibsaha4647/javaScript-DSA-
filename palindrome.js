// const palindrome = (str) => {
//   let result = true;
//   let start = 0;
//   let end = str.length - 1;

//   while (end > start) {
//     console.log(str[start],"str[start]")
//     console.log(str[end],"str[end]")
//     if (str[start] !== str[end]) {
//       return false;
//     }
   
//     start++;
//     end--;
//     console.log(str[start],"str[start]++")
//     console.log(str[end],"str[end]--")
//   }

//   return result;
// };

// const str = "11211";
// console.log(palindrome(str));
function Palindrome()
			{
				var rem, temp, final = 0;
				var number =121;

				temp = number;
				while(number>0)
				{
          console.log(number,"number")
          console.log(rem,"rem1")
					rem = number%10;
          console.log(rem,"rem")
					number = parseInt(number/10);
          console.log(number,"number")
					final = final*10+rem;
          console.log(final,"final")
          console.log("===================")

				}
				if(final==temp)
				{
					console.log("The inputed number is Palindrome");
				}
				else
				{
          console.log("The inputted number is not palindrome");
				}
			}

      Palindrome()
// const fun = (num)=>{
  
//   let str = num.toString();

//   console.log(typeof str)

// }

// fun(5)