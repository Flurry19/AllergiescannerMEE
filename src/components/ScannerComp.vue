<template>
  <div class="container mx-auto ">
    <div class="flex flex-col">
      <h1 class="text-4xl font-bold mt-4">Scan hier je product
      </h1>
        <div class="justify-around mx-auto m-8 h-[73vh]">
            <StreamBarcodeReader
            @decode="(a, b, c) => onDecode(a, b, c)"
            @loaded="() => onLoaded()"

            ></StreamBarcodeReader>
            Input Value: {{ text || "Nothing" }}
        </div>
    </div>
  </div>
  </template>

  <script>
  import { StreamBarcodeReader } from "vue-barcode-reader";
import router from "../router";

  export default {
    name: "ScannerComp",
    components: {
      StreamBarcodeReader,
    },
    data() {
      return {
        text: "",
        id: null,
      };
    },
    props: {
      msg: String,
    },
    methods: {
      onDecode(a, b, c) {
        console.log(a, b, c);

        // Opslaan in localStorage
        const scannedBarcodes = JSON.parse(localStorage.getItem('scannedBarcodes')) || [];
        if (!scannedBarcodes.includes(a)) {
          scannedBarcodes.push(a);
          localStorage.setItem('scannedBarcodes', JSON.stringify(scannedBarcodes));
        }

        router.push({ name: 'productpage', params: { barcode: a } })
        this.text = a;
        if (this.id) clearTimeout(this.id);
        this.id = setTimeout(() => {
          if (this.text === a) {
            this.text = "";
          }
        }, 5000);
      },
      onLoaded() {
        console.log("load");
      },
    },
  };
  </script>


