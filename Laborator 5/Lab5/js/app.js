var app = new Vue({
  el: "#baseband-encoder",
  data: {
    bits: [],
    encodedBits: [],
    encodedNrz_LBits: [],
    encodedNrz_MBits: [],
    encodedNrz_SBits: [],
    encodedRZUnipolarBits: [],
    encodedRZBipolarBits: [],
    encodedBiphaseLevelBits: [],
    encodedBiphaseMarkBits: [],
    encodedBiphaseSpaceBits: [],
    encodedAMIBits: [],
    status: "",
    numberOfBits: 16,
    validateBit: validateBit,
  },
  created: function () {
    this.bits = getBitstream(this.numberOfBits);
  },
  methods: {
    encode: function () {
      this.encodedBits = getManchesterLevelEncoding(this.bits);
      this.encodedNrz_LBits = getNRZLevel(this.bits);
      this.encodedNrz_MBits = getNRZMark(this.bits);
      this.encodedNrz_SBits = getNRZSpace(this.bits);
      this.encodedRZUnipolarBits = getRZUnipolar(this.bits);
      this.encodedBiphaseLevelBits = getBiphaseLevel(this.bits);
      this.encodedBiphaseMarkBits = getBiphaseMark(this.bits);
      this.encodedBiphaseSpaceBits = getBiphaseSpace(this.bits);
      this.encodedAMIBits = getAlternateMarkInversion(this.bits);
    },
  },
});
