let inputArray = [
	73365,
	84016,
	98122,
	114871,
	111575,
	130294,
	59341,
	102810,
	92986,
	81275,
	83155,
	74530,
	67858,
	54107,
	62099,
	82535,
	122085,
	139127,
	131939,
	130125,
	96285,
	70572,
	129325,
	132261,
	69597,
	93574,
	70089,
	130711,
	109220,
	50155,
	98250,
	51054,
	100028,
	86985,
	106638,
	116993,
	95130,
	115571,
	56707,
	105988,
	123358,
	95470,
	71094,
	126310,
	66153,
	128788,
	51605,
	70044,
	70180,
	141905,
	96494,
	89332,
	96688,
	131936,
	83782,
	108218,
	60650,
	91289,
	126406,
	112939,
	76303,
	115774,
	135382,
	116478,
	77898,
	98611,
	89155,
	114878,
	110085,
	114482,
	61585,
	103480,
	99198,
	81082,
	113501,
	100167,
	100085,
	128747,
	79731,
	93289,
	121516,
	116380,
	56592,
	146611,
	132595,
	60483,
	105828,
	118923,
	141972,
	126450,
	77214,
	97406,
	77745,
	101982,
	120919,
	71085,
	118300,
	92440,
	115184,
	142447
];

let result = 0;
inputArray.forEach(element => result += (Math.floor(element / 3) - 2));
console.log(result);