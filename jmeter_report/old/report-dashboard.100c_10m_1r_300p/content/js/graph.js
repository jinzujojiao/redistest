/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 2970.0, "series": [{"data": [[0.0, 8.0], [0.1, 53.0], [0.2, 59.0], [0.3, 64.0], [0.4, 70.0], [0.5, 74.0], [0.6, 78.0], [0.7, 81.0], [0.8, 84.0], [0.9, 87.0], [1.0, 90.0], [1.1, 92.0], [1.2, 94.0], [1.3, 96.0], [1.4, 97.0], [1.5, 99.0], [1.6, 101.0], [1.7, 102.0], [1.8, 104.0], [1.9, 105.0], [2.0, 106.0], [2.1, 108.0], [2.2, 109.0], [2.3, 110.0], [2.4, 111.0], [2.5, 112.0], [2.6, 113.0], [2.7, 114.0], [2.8, 115.0], [2.9, 116.0], [3.0, 116.0], [3.1, 117.0], [3.2, 118.0], [3.3, 119.0], [3.4, 120.0], [3.5, 120.0], [3.6, 121.0], [3.7, 122.0], [3.8, 122.0], [3.9, 123.0], [4.0, 124.0], [4.1, 124.0], [4.2, 125.0], [4.3, 125.0], [4.4, 126.0], [4.5, 127.0], [4.6, 127.0], [4.7, 128.0], [4.8, 128.0], [4.9, 129.0], [5.0, 129.0], [5.1, 130.0], [5.2, 131.0], [5.3, 131.0], [5.4, 132.0], [5.5, 132.0], [5.6, 133.0], [5.7, 133.0], [5.8, 134.0], [5.9, 134.0], [6.0, 135.0], [6.1, 135.0], [6.2, 136.0], [6.3, 136.0], [6.4, 137.0], [6.5, 137.0], [6.6, 137.0], [6.7, 138.0], [6.8, 138.0], [6.9, 139.0], [7.0, 139.0], [7.1, 140.0], [7.2, 140.0], [7.3, 141.0], [7.4, 141.0], [7.5, 142.0], [7.6, 142.0], [7.7, 142.0], [7.8, 143.0], [7.9, 143.0], [8.0, 144.0], [8.1, 144.0], [8.2, 144.0], [8.3, 145.0], [8.4, 145.0], [8.5, 146.0], [8.6, 146.0], [8.7, 147.0], [8.8, 147.0], [8.9, 147.0], [9.0, 148.0], [9.1, 148.0], [9.2, 149.0], [9.3, 149.0], [9.4, 149.0], [9.5, 150.0], [9.6, 150.0], [9.7, 151.0], [9.8, 151.0], [9.9, 151.0], [10.0, 152.0], [10.1, 152.0], [10.2, 153.0], [10.3, 153.0], [10.4, 154.0], [10.5, 154.0], [10.6, 154.0], [10.7, 155.0], [10.8, 155.0], [10.9, 156.0], [11.0, 156.0], [11.1, 156.0], [11.2, 157.0], [11.3, 157.0], [11.4, 158.0], [11.5, 158.0], [11.6, 158.0], [11.7, 159.0], [11.8, 159.0], [11.9, 160.0], [12.0, 160.0], [12.1, 160.0], [12.2, 161.0], [12.3, 161.0], [12.4, 162.0], [12.5, 162.0], [12.6, 162.0], [12.7, 163.0], [12.8, 163.0], [12.9, 164.0], [13.0, 164.0], [13.1, 164.0], [13.2, 165.0], [13.3, 165.0], [13.4, 166.0], [13.5, 166.0], [13.6, 166.0], [13.7, 167.0], [13.8, 167.0], [13.9, 168.0], [14.0, 168.0], [14.1, 168.0], [14.2, 169.0], [14.3, 169.0], [14.4, 169.0], [14.5, 170.0], [14.6, 170.0], [14.7, 171.0], [14.8, 171.0], [14.9, 171.0], [15.0, 172.0], [15.1, 172.0], [15.2, 172.0], [15.3, 173.0], [15.4, 173.0], [15.5, 174.0], [15.6, 174.0], [15.7, 174.0], [15.8, 175.0], [15.9, 175.0], [16.0, 175.0], [16.1, 176.0], [16.2, 176.0], [16.3, 176.0], [16.4, 177.0], [16.5, 177.0], [16.6, 177.0], [16.7, 178.0], [16.8, 178.0], [16.9, 178.0], [17.0, 179.0], [17.1, 179.0], [17.2, 179.0], [17.3, 179.0], [17.4, 180.0], [17.5, 180.0], [17.6, 180.0], [17.7, 181.0], [17.8, 181.0], [17.9, 181.0], [18.0, 182.0], [18.1, 182.0], [18.2, 182.0], [18.3, 182.0], [18.4, 183.0], [18.5, 183.0], [18.6, 183.0], [18.7, 184.0], [18.8, 184.0], [18.9, 184.0], [19.0, 184.0], [19.1, 185.0], [19.2, 185.0], [19.3, 185.0], [19.4, 186.0], [19.5, 186.0], [19.6, 186.0], [19.7, 186.0], [19.8, 187.0], [19.9, 187.0], [20.0, 187.0], [20.1, 187.0], [20.2, 188.0], [20.3, 188.0], [20.4, 188.0], [20.5, 188.0], [20.6, 189.0], [20.7, 189.0], [20.8, 189.0], [20.9, 189.0], [21.0, 190.0], [21.1, 190.0], [21.2, 190.0], [21.3, 190.0], [21.4, 191.0], [21.5, 191.0], [21.6, 191.0], [21.7, 191.0], [21.8, 192.0], [21.9, 192.0], [22.0, 192.0], [22.1, 192.0], [22.2, 193.0], [22.3, 193.0], [22.4, 193.0], [22.5, 193.0], [22.6, 194.0], [22.7, 194.0], [22.8, 194.0], [22.9, 194.0], [23.0, 194.0], [23.1, 195.0], [23.2, 195.0], [23.3, 195.0], [23.4, 195.0], [23.5, 195.0], [23.6, 196.0], [23.7, 196.0], [23.8, 196.0], [23.9, 196.0], [24.0, 197.0], [24.1, 197.0], [24.2, 197.0], [24.3, 197.0], [24.4, 197.0], [24.5, 198.0], [24.6, 198.0], [24.7, 198.0], [24.8, 198.0], [24.9, 198.0], [25.0, 198.0], [25.1, 199.0], [25.2, 199.0], [25.3, 199.0], [25.4, 199.0], [25.5, 199.0], [25.6, 200.0], [25.7, 200.0], [25.8, 200.0], [25.9, 200.0], [26.0, 200.0], [26.1, 201.0], [26.2, 201.0], [26.3, 201.0], [26.4, 201.0], [26.5, 201.0], [26.6, 201.0], [26.7, 202.0], [26.8, 202.0], [26.9, 202.0], [27.0, 202.0], [27.1, 202.0], [27.2, 202.0], [27.3, 203.0], [27.4, 203.0], [27.5, 203.0], [27.6, 203.0], [27.7, 203.0], [27.8, 204.0], [27.9, 204.0], [28.0, 204.0], [28.1, 204.0], [28.2, 204.0], [28.3, 204.0], [28.4, 204.0], [28.5, 205.0], [28.6, 205.0], [28.7, 205.0], [28.8, 205.0], [28.9, 205.0], [29.0, 205.0], [29.1, 206.0], [29.2, 206.0], [29.3, 206.0], [29.4, 206.0], [29.5, 206.0], [29.6, 206.0], [29.7, 207.0], [29.8, 207.0], [29.9, 207.0], [30.0, 207.0], [30.1, 207.0], [30.2, 207.0], [30.3, 208.0], [30.4, 208.0], [30.5, 208.0], [30.6, 208.0], [30.7, 208.0], [30.8, 208.0], [30.9, 209.0], [31.0, 209.0], [31.1, 209.0], [31.2, 209.0], [31.3, 209.0], [31.4, 209.0], [31.5, 209.0], [31.6, 210.0], [31.7, 210.0], [31.8, 210.0], [31.9, 210.0], [32.0, 210.0], [32.1, 210.0], [32.2, 210.0], [32.3, 211.0], [32.4, 211.0], [32.5, 211.0], [32.6, 211.0], [32.7, 211.0], [32.8, 211.0], [32.9, 211.0], [33.0, 212.0], [33.1, 212.0], [33.2, 212.0], [33.3, 212.0], [33.4, 212.0], [33.5, 212.0], [33.6, 212.0], [33.7, 213.0], [33.8, 213.0], [33.9, 213.0], [34.0, 213.0], [34.1, 213.0], [34.2, 213.0], [34.3, 213.0], [34.4, 213.0], [34.5, 214.0], [34.6, 214.0], [34.7, 214.0], [34.8, 214.0], [34.9, 214.0], [35.0, 214.0], [35.1, 214.0], [35.2, 215.0], [35.3, 215.0], [35.4, 215.0], [35.5, 215.0], [35.6, 215.0], [35.7, 215.0], [35.8, 215.0], [35.9, 216.0], [36.0, 216.0], [36.1, 216.0], [36.2, 216.0], [36.3, 216.0], [36.4, 216.0], [36.5, 216.0], [36.6, 217.0], [36.7, 217.0], [36.8, 217.0], [36.9, 217.0], [37.0, 217.0], [37.1, 217.0], [37.2, 217.0], [37.3, 217.0], [37.4, 218.0], [37.5, 218.0], [37.6, 218.0], [37.7, 218.0], [37.8, 218.0], [37.9, 218.0], [38.0, 218.0], [38.1, 219.0], [38.2, 219.0], [38.3, 219.0], [38.4, 219.0], [38.5, 219.0], [38.6, 219.0], [38.7, 219.0], [38.8, 219.0], [38.9, 219.0], [39.0, 220.0], [39.1, 220.0], [39.2, 220.0], [39.3, 220.0], [39.4, 220.0], [39.5, 220.0], [39.6, 220.0], [39.7, 221.0], [39.8, 221.0], [39.9, 221.0], [40.0, 221.0], [40.1, 221.0], [40.2, 221.0], [40.3, 221.0], [40.4, 221.0], [40.5, 222.0], [40.6, 222.0], [40.7, 222.0], [40.8, 222.0], [40.9, 222.0], [41.0, 222.0], [41.1, 222.0], [41.2, 222.0], [41.3, 223.0], [41.4, 223.0], [41.5, 223.0], [41.6, 223.0], [41.7, 223.0], [41.8, 223.0], [41.9, 223.0], [42.0, 223.0], [42.1, 224.0], [42.2, 224.0], [42.3, 224.0], [42.4, 224.0], [42.5, 224.0], [42.6, 224.0], [42.7, 224.0], [42.8, 224.0], [42.9, 225.0], [43.0, 225.0], [43.1, 225.0], [43.2, 225.0], [43.3, 225.0], [43.4, 225.0], [43.5, 225.0], [43.6, 225.0], [43.7, 226.0], [43.8, 226.0], [43.9, 226.0], [44.0, 226.0], [44.1, 226.0], [44.2, 226.0], [44.3, 226.0], [44.4, 226.0], [44.5, 227.0], [44.6, 227.0], [44.7, 227.0], [44.8, 227.0], [44.9, 227.0], [45.0, 227.0], [45.1, 227.0], [45.2, 227.0], [45.3, 228.0], [45.4, 228.0], [45.5, 228.0], [45.6, 228.0], [45.7, 228.0], [45.8, 228.0], [45.9, 228.0], [46.0, 228.0], [46.1, 229.0], [46.2, 229.0], [46.3, 229.0], [46.4, 229.0], [46.5, 229.0], [46.6, 229.0], [46.7, 229.0], [46.8, 229.0], [46.9, 230.0], [47.0, 230.0], [47.1, 230.0], [47.2, 230.0], [47.3, 230.0], [47.4, 230.0], [47.5, 230.0], [47.6, 230.0], [47.7, 231.0], [47.8, 231.0], [47.9, 231.0], [48.0, 231.0], [48.1, 231.0], [48.2, 231.0], [48.3, 231.0], [48.4, 231.0], [48.5, 232.0], [48.6, 232.0], [48.7, 232.0], [48.8, 232.0], [48.9, 232.0], [49.0, 232.0], [49.1, 232.0], [49.2, 233.0], [49.3, 233.0], [49.4, 233.0], [49.5, 233.0], [49.6, 233.0], [49.7, 233.0], [49.8, 233.0], [49.9, 233.0], [50.0, 234.0], [50.1, 234.0], [50.2, 234.0], [50.3, 234.0], [50.4, 234.0], [50.5, 234.0], [50.6, 234.0], [50.7, 235.0], [50.8, 235.0], [50.9, 235.0], [51.0, 235.0], [51.1, 235.0], [51.2, 235.0], [51.3, 235.0], [51.4, 236.0], [51.5, 236.0], [51.6, 236.0], [51.7, 236.0], [51.8, 236.0], [51.9, 236.0], [52.0, 236.0], [52.1, 236.0], [52.2, 237.0], [52.3, 237.0], [52.4, 237.0], [52.5, 237.0], [52.6, 237.0], [52.7, 237.0], [52.8, 237.0], [52.9, 238.0], [53.0, 238.0], [53.1, 238.0], [53.2, 238.0], [53.3, 238.0], [53.4, 238.0], [53.5, 238.0], [53.6, 239.0], [53.7, 239.0], [53.8, 239.0], [53.9, 239.0], [54.0, 239.0], [54.1, 239.0], [54.2, 240.0], [54.3, 240.0], [54.4, 240.0], [54.5, 240.0], [54.6, 240.0], [54.7, 240.0], [54.8, 240.0], [54.9, 241.0], [55.0, 241.0], [55.1, 241.0], [55.2, 241.0], [55.3, 241.0], [55.4, 241.0], [55.5, 242.0], [55.6, 242.0], [55.7, 242.0], [55.8, 242.0], [55.9, 242.0], [56.0, 242.0], [56.1, 243.0], [56.2, 243.0], [56.3, 243.0], [56.4, 243.0], [56.5, 243.0], [56.6, 243.0], [56.7, 243.0], [56.8, 244.0], [56.9, 244.0], [57.0, 244.0], [57.1, 244.0], [57.2, 244.0], [57.3, 244.0], [57.4, 245.0], [57.5, 245.0], [57.6, 245.0], [57.7, 245.0], [57.8, 245.0], [57.9, 245.0], [58.0, 246.0], [58.1, 246.0], [58.2, 246.0], [58.3, 246.0], [58.4, 246.0], [58.5, 246.0], [58.6, 247.0], [58.7, 247.0], [58.8, 247.0], [58.9, 247.0], [59.0, 247.0], [59.1, 248.0], [59.2, 248.0], [59.3, 248.0], [59.4, 248.0], [59.5, 248.0], [59.6, 248.0], [59.7, 249.0], [59.8, 249.0], [59.9, 249.0], [60.0, 249.0], [60.1, 249.0], [60.2, 250.0], [60.3, 250.0], [60.4, 250.0], [60.5, 250.0], [60.6, 250.0], [60.7, 251.0], [60.8, 251.0], [60.9, 251.0], [61.0, 251.0], [61.1, 251.0], [61.2, 252.0], [61.3, 252.0], [61.4, 252.0], [61.5, 252.0], [61.6, 252.0], [61.7, 253.0], [61.8, 253.0], [61.9, 253.0], [62.0, 253.0], [62.1, 254.0], [62.2, 254.0], [62.3, 254.0], [62.4, 254.0], [62.5, 254.0], [62.6, 255.0], [62.7, 255.0], [62.8, 255.0], [62.9, 255.0], [63.0, 256.0], [63.1, 256.0], [63.2, 256.0], [63.3, 256.0], [63.4, 256.0], [63.5, 257.0], [63.6, 257.0], [63.7, 257.0], [63.8, 257.0], [63.9, 258.0], [64.0, 258.0], [64.1, 258.0], [64.2, 258.0], [64.3, 259.0], [64.4, 259.0], [64.5, 259.0], [64.6, 260.0], [64.7, 260.0], [64.8, 260.0], [64.9, 260.0], [65.0, 261.0], [65.1, 261.0], [65.2, 261.0], [65.3, 261.0], [65.4, 262.0], [65.5, 262.0], [65.6, 262.0], [65.7, 262.0], [65.8, 263.0], [65.9, 263.0], [66.0, 263.0], [66.1, 263.0], [66.2, 264.0], [66.3, 264.0], [66.4, 264.0], [66.5, 265.0], [66.6, 265.0], [66.7, 265.0], [66.8, 265.0], [66.9, 266.0], [67.0, 266.0], [67.1, 266.0], [67.2, 267.0], [67.3, 267.0], [67.4, 267.0], [67.5, 268.0], [67.6, 268.0], [67.7, 268.0], [67.8, 268.0], [67.9, 269.0], [68.0, 269.0], [68.1, 269.0], [68.2, 270.0], [68.3, 270.0], [68.4, 270.0], [68.5, 271.0], [68.6, 271.0], [68.7, 271.0], [68.8, 272.0], [68.9, 272.0], [69.0, 272.0], [69.1, 273.0], [69.2, 273.0], [69.3, 273.0], [69.4, 274.0], [69.5, 274.0], [69.6, 274.0], [69.7, 275.0], [69.8, 275.0], [69.9, 275.0], [70.0, 275.0], [70.1, 276.0], [70.2, 276.0], [70.3, 277.0], [70.4, 277.0], [70.5, 277.0], [70.6, 278.0], [70.7, 278.0], [70.8, 278.0], [70.9, 278.0], [71.0, 279.0], [71.1, 279.0], [71.2, 279.0], [71.3, 280.0], [71.4, 280.0], [71.5, 280.0], [71.6, 281.0], [71.7, 281.0], [71.8, 281.0], [71.9, 282.0], [72.0, 282.0], [72.1, 282.0], [72.2, 283.0], [72.3, 283.0], [72.4, 283.0], [72.5, 284.0], [72.6, 284.0], [72.7, 284.0], [72.8, 285.0], [72.9, 285.0], [73.0, 285.0], [73.1, 286.0], [73.2, 286.0], [73.3, 286.0], [73.4, 287.0], [73.5, 287.0], [73.6, 287.0], [73.7, 288.0], [73.8, 288.0], [73.9, 288.0], [74.0, 288.0], [74.1, 289.0], [74.2, 289.0], [74.3, 289.0], [74.4, 290.0], [74.5, 290.0], [74.6, 290.0], [74.7, 291.0], [74.8, 291.0], [74.9, 291.0], [75.0, 291.0], [75.1, 292.0], [75.2, 292.0], [75.3, 292.0], [75.4, 293.0], [75.5, 293.0], [75.6, 293.0], [75.7, 294.0], [75.8, 294.0], [75.9, 294.0], [76.0, 295.0], [76.1, 295.0], [76.2, 295.0], [76.3, 296.0], [76.4, 296.0], [76.5, 296.0], [76.6, 297.0], [76.7, 297.0], [76.8, 297.0], [76.9, 297.0], [77.0, 298.0], [77.1, 298.0], [77.2, 298.0], [77.3, 299.0], [77.4, 299.0], [77.5, 299.0], [77.6, 299.0], [77.7, 300.0], [77.8, 300.0], [77.9, 300.0], [78.0, 301.0], [78.1, 301.0], [78.2, 301.0], [78.3, 301.0], [78.4, 302.0], [78.5, 302.0], [78.6, 302.0], [78.7, 303.0], [78.8, 303.0], [78.9, 303.0], [79.0, 303.0], [79.1, 304.0], [79.2, 304.0], [79.3, 304.0], [79.4, 305.0], [79.5, 305.0], [79.6, 305.0], [79.7, 305.0], [79.8, 306.0], [79.9, 306.0], [80.0, 306.0], [80.1, 307.0], [80.2, 307.0], [80.3, 307.0], [80.4, 307.0], [80.5, 308.0], [80.6, 308.0], [80.7, 308.0], [80.8, 308.0], [80.9, 309.0], [81.0, 309.0], [81.1, 309.0], [81.2, 310.0], [81.3, 310.0], [81.4, 310.0], [81.5, 310.0], [81.6, 311.0], [81.7, 311.0], [81.8, 311.0], [81.9, 311.0], [82.0, 312.0], [82.1, 312.0], [82.2, 312.0], [82.3, 312.0], [82.4, 313.0], [82.5, 313.0], [82.6, 313.0], [82.7, 314.0], [82.8, 314.0], [82.9, 314.0], [83.0, 314.0], [83.1, 315.0], [83.2, 315.0], [83.3, 315.0], [83.4, 315.0], [83.5, 316.0], [83.6, 316.0], [83.7, 316.0], [83.8, 316.0], [83.9, 317.0], [84.0, 317.0], [84.1, 317.0], [84.2, 318.0], [84.3, 318.0], [84.4, 318.0], [84.5, 318.0], [84.6, 319.0], [84.7, 319.0], [84.8, 319.0], [84.9, 320.0], [85.0, 320.0], [85.1, 320.0], [85.2, 320.0], [85.3, 321.0], [85.4, 321.0], [85.5, 321.0], [85.6, 321.0], [85.7, 322.0], [85.8, 322.0], [85.9, 322.0], [86.0, 322.0], [86.1, 323.0], [86.2, 323.0], [86.3, 323.0], [86.4, 323.0], [86.5, 324.0], [86.6, 324.0], [86.7, 324.0], [86.8, 325.0], [86.9, 325.0], [87.0, 325.0], [87.1, 325.0], [87.2, 326.0], [87.3, 326.0], [87.4, 326.0], [87.5, 327.0], [87.6, 327.0], [87.7, 327.0], [87.8, 328.0], [87.9, 328.0], [88.0, 328.0], [88.1, 328.0], [88.2, 329.0], [88.3, 329.0], [88.4, 329.0], [88.5, 330.0], [88.6, 330.0], [88.7, 330.0], [88.8, 330.0], [88.9, 331.0], [89.0, 331.0], [89.1, 331.0], [89.2, 332.0], [89.3, 332.0], [89.4, 332.0], [89.5, 333.0], [89.6, 333.0], [89.7, 333.0], [89.8, 334.0], [89.9, 334.0], [90.0, 334.0], [90.1, 335.0], [90.2, 335.0], [90.3, 335.0], [90.4, 336.0], [90.5, 336.0], [90.6, 337.0], [90.7, 337.0], [90.8, 337.0], [90.9, 338.0], [91.0, 338.0], [91.1, 338.0], [91.2, 339.0], [91.3, 339.0], [91.4, 340.0], [91.5, 340.0], [91.6, 340.0], [91.7, 341.0], [91.8, 341.0], [91.9, 342.0], [92.0, 342.0], [92.1, 342.0], [92.2, 343.0], [92.3, 343.0], [92.4, 344.0], [92.5, 344.0], [92.6, 345.0], [92.7, 345.0], [92.8, 346.0], [92.9, 346.0], [93.0, 347.0], [93.1, 347.0], [93.2, 348.0], [93.3, 348.0], [93.4, 349.0], [93.5, 350.0], [93.6, 350.0], [93.7, 351.0], [93.8, 352.0], [93.9, 352.0], [94.0, 353.0], [94.1, 354.0], [94.2, 354.0], [94.3, 355.0], [94.4, 356.0], [94.5, 357.0], [94.6, 357.0], [94.7, 358.0], [94.8, 359.0], [94.9, 360.0], [95.0, 361.0], [95.1, 362.0], [95.2, 363.0], [95.3, 364.0], [95.4, 366.0], [95.5, 367.0], [95.6, 369.0], [95.7, 370.0], [95.8, 372.0], [95.9, 374.0], [96.0, 375.0], [96.1, 378.0], [96.2, 380.0], [96.3, 383.0], [96.4, 386.0], [96.5, 389.0], [96.6, 392.0], [96.7, 397.0], [96.8, 400.0], [96.9, 404.0], [97.0, 408.0], [97.1, 413.0], [97.2, 417.0], [97.3, 423.0], [97.4, 428.0], [97.5, 433.0], [97.6, 438.0], [97.7, 443.0], [97.8, 448.0], [97.9, 454.0], [98.0, 461.0], [98.1, 468.0], [98.2, 474.0], [98.3, 480.0], [98.4, 488.0], [98.5, 495.0], [98.6, 502.0], [98.7, 510.0], [98.8, 518.0], [98.9, 526.0], [99.0, 534.0], [99.1, 543.0], [99.2, 553.0], [99.3, 566.0], [99.4, 580.0], [99.5, 598.0], [99.6, 621.0], [99.7, 646.0], [99.8, 682.0], [99.9, 766.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 127017.0, "series": [{"data": [[0.0, 3734.0], [600.0, 787.0], [700.0, 224.0], [800.0, 48.0], [900.0, 16.0], [1000.0, 15.0], [1100.0, 3.0], [1200.0, 6.0], [1300.0, 3.0], [1400.0, 2.0], [1500.0, 4.0], [100.0, 58564.0], [1800.0, 8.0], [1900.0, 9.0], [2000.0, 8.0], [2100.0, 10.0], [2200.0, 10.0], [2300.0, 9.0], [2400.0, 13.0], [2500.0, 9.0], [2600.0, 15.0], [2700.0, 5.0], [2800.0, 3.0], [2900.0, 1.0], [200.0, 127017.0], [300.0, 46754.0], [400.0, 4335.0], [500.0, 2302.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 104.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 240434.0, "series": [{"data": [[0.0, 240434.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3376.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 104.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 99.77032529838516, "minX": 1.61970042E12, "maxY": 100.0, "series": [{"data": [[1.6197006E12, 100.0], [1.61970078E12, 100.0], [1.61970072E12, 100.0], [1.6197009E12, 100.0], [1.61970042E12, 100.0], [1.61970084E12, 100.0], [1.61970102E12, 99.77032529838516], [1.61970054E12, 100.0], [1.61970096E12, 100.0], [1.61970048E12, 100.0], [1.61970066E12, 100.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61970102E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 111.0, "minX": 2.0, "maxY": 458.0, "series": [{"data": [[2.0, 133.0], [3.0, 140.0], [4.0, 120.0], [6.0, 141.0], [7.0, 207.0], [8.0, 140.0], [9.0, 130.5], [10.0, 203.0], [12.0, 111.0], [14.0, 127.0], [18.0, 118.0], [19.0, 149.0], [20.0, 131.0], [21.0, 148.0], [23.0, 201.5], [25.0, 182.0], [26.0, 222.5], [27.0, 129.0], [28.0, 131.5], [32.0, 158.5], [35.0, 166.33333333333334], [39.0, 201.75], [38.0, 190.0], [41.0, 213.5], [43.0, 184.5], [44.0, 239.0], [47.0, 201.0], [46.0, 236.0], [49.0, 200.0], [48.0, 220.0], [51.0, 198.5], [50.0, 236.0], [53.0, 199.0], [52.0, 236.0], [55.0, 183.0], [54.0, 188.0], [57.0, 177.0], [58.0, 193.0], [61.0, 199.5], [60.0, 191.5], [63.0, 207.5], [67.0, 212.33333333333334], [64.0, 231.0], [71.0, 276.0], [70.0, 212.0], [69.0, 195.5], [75.0, 458.0], [74.0, 205.0], [73.0, 208.0], [72.0, 402.0], [78.0, 203.0], [83.0, 383.0], [82.0, 197.0], [87.0, 306.5], [85.0, 187.0], [84.0, 231.0], [89.0, 220.0], [88.0, 358.0], [95.0, 167.0], [94.0, 229.0], [93.0, 214.33333333333334], [92.0, 240.0], [98.0, 348.5], [97.0, 322.5], [96.0, 241.39999999999998], [100.0, 245.7907234297361]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[99.9798781537755, 245.7754454438833]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 684.6666666666666, "minX": 1.61970042E12, "maxY": 139193.4, "series": [{"data": [[1.6197006E12, 125492.95], [1.61970078E12, 115965.41666666667], [1.61970072E12, 118933.08333333333], [1.6197009E12, 119261.45], [1.61970042E12, 1317.3333333333333], [1.61970084E12, 119394.36666666667], [1.61970102E12, 108151.7], [1.61970054E12, 139193.4], [1.61970096E12, 125836.95], [1.61970048E12, 135092.13333333333], [1.61970066E12, 126033.11666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6197006E12, 65280.333333333336], [1.61970078E12, 60337.566666666666], [1.61970072E12, 61864.9], [1.6197009E12, 62036.066666666666], [1.61970042E12, 684.6666666666666], [1.61970084E12, 62112.433333333334], [1.61970102E12, 56261.166666666664], [1.61970054E12, 72419.3], [1.61970096E12, 65475.2], [1.61970048E12, 70262.6], [1.61970066E12, 65572.63333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61970102E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 218.06679757099735, "minX": 1.61970042E12, "maxY": 1106.3153846153841, "series": [{"data": [[1.6197006E12, 242.07995159338435], [1.61970078E12, 261.789508139485], [1.61970072E12, 255.3580641042022], [1.6197009E12, 254.61613889124786], [1.61970042E12, 1106.3153846153841], [1.61970084E12, 254.43697799635441], [1.61970102E12, 265.3131757547373], [1.61970054E12, 218.06679757099735], [1.61970096E12, 241.3569015444024], [1.61970048E12, 224.96334607600613], [1.61970066E12, 240.67567567567477]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61970102E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 218.03010799607296, "minX": 1.61970042E12, "maxY": 1093.8576923076912, "series": [{"data": [[1.6197006E12, 242.05123033481334], [1.61970078E12, 261.75878322349973], [1.61970072E12, 255.32575660835138], [1.6197009E12, 254.5884625180413], [1.61970042E12, 1093.8576923076912], [1.61970084E12, 254.40925085852302], [1.61970102E12, 265.28340744207645], [1.61970054E12, 218.03010799607296], [1.61970096E12, 241.32625482625505], [1.61970048E12, 224.91338730230026], [1.61970066E12, 240.64487369985105]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61970102E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.01820734846711908, "minX": 1.61970042E12, "maxY": 2.7461538461538475, "series": [{"data": [[1.6197006E12, 0.026018555869302195], [1.61970078E12, 0.02348012045563657], [1.61970072E12, 0.023922019324905307], [1.6197009E12, 0.02152135155785732], [1.61970042E12, 2.7461538461538475], [1.61970084E12, 0.025776911010302123], [1.61970102E12, 0.01820734846711908], [1.61970054E12, 0.04443474782735152], [1.61970096E12, 0.02662483912483919], [1.61970048E12, 0.02630987182370134], [1.61970066E12, 0.032368177984820036]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61970102E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 8.0, "minX": 1.61970042E12, "maxY": 2970.0, "series": [{"data": [[1.6197006E12, 1065.0], [1.61970078E12, 1304.0], [1.61970072E12, 1401.0], [1.6197009E12, 1568.0], [1.61970042E12, 2970.0], [1.61970084E12, 1573.0], [1.61970102E12, 913.0], [1.61970054E12, 1056.0], [1.61970096E12, 1400.0], [1.61970048E12, 1172.0], [1.61970066E12, 1598.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6197006E12, 327.0], [1.61970078E12, 343.0], [1.61970072E12, 344.0], [1.6197009E12, 339.0], [1.61970042E12, 2576.2000000000003], [1.61970084E12, 341.0], [1.61970102E12, 348.90000000000146], [1.61970054E12, 278.0], [1.61970096E12, 327.0], [1.61970048E12, 307.0], [1.61970066E12, 325.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6197006E12, 506.9800000000032], [1.61970078E12, 557.0], [1.61970072E12, 552.0], [1.6197009E12, 538.0], [1.61970042E12, 2829.3599999999997], [1.61970084E12, 549.0], [1.61970102E12, 557.0], [1.61970054E12, 493.0], [1.61970096E12, 531.9900000000016], [1.61970048E12, 495.0], [1.61970066E12, 526.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6197006E12, 348.0], [1.61970078E12, 376.0], [1.61970072E12, 367.0], [1.6197009E12, 365.0], [1.61970042E12, 2683.95], [1.61970084E12, 373.0], [1.61970102E12, 378.0], [1.61970054E12, 319.9500000000007], [1.61970096E12, 356.9500000000007], [1.61970048E12, 333.0], [1.61970066E12, 352.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6197006E12, 13.0], [1.61970078E12, 33.0], [1.61970072E12, 8.0], [1.6197009E12, 36.0], [1.61970042E12, 105.0], [1.61970084E12, 13.0], [1.61970102E12, 31.0], [1.61970054E12, 10.0], [1.61970096E12, 11.0], [1.61970048E12, 14.0], [1.61970066E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6197006E12, 231.0], [1.61970078E12, 246.0], [1.61970072E12, 243.0], [1.6197009E12, 238.0], [1.61970042E12, 477.5], [1.61970084E12, 241.0], [1.61970102E12, 250.0], [1.61970054E12, 207.0], [1.61970096E12, 233.0], [1.61970048E12, 219.0], [1.61970066E12, 230.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61970102E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 160.0, "minX": 260.0, "maxY": 477.5, "series": [{"data": [[260.0, 477.5], [333.0, 273.0], [324.0, 287.5], [332.0, 303.0], [331.0, 288.0], [320.0, 324.5], [326.0, 280.0], [323.0, 283.0], [349.0, 269.0], [351.0, 259.0], [339.0, 280.0], [341.0, 266.0], [338.0, 276.0], [340.0, 274.0], [350.0, 289.0], [348.0, 272.0], [346.0, 244.0], [347.0, 291.0], [344.0, 261.0], [354.0, 258.0], [365.0, 250.0], [359.0, 267.0], [361.0, 263.0], [366.0, 255.0], [367.0, 260.0], [360.0, 264.0], [358.0, 259.0], [357.0, 268.0], [356.0, 283.0], [355.0, 271.0], [363.0, 258.5], [362.0, 253.0], [353.0, 269.0], [352.0, 280.0], [364.0, 257.0], [380.0, 246.0], [371.0, 254.0], [377.0, 250.0], [378.0, 258.0], [379.0, 248.0], [375.0, 243.0], [376.0, 247.0], [383.0, 252.0], [374.0, 256.0], [372.0, 260.0], [373.0, 251.0], [370.0, 250.0], [369.0, 252.0], [368.0, 252.0], [381.0, 245.0], [382.0, 252.0], [387.0, 246.0], [392.0, 248.0], [397.0, 237.0], [396.0, 243.0], [393.0, 240.0], [385.0, 249.0], [384.0, 246.0], [391.0, 235.0], [386.0, 246.0], [390.0, 238.5], [398.0, 237.0], [399.0, 235.0], [389.0, 241.0], [388.0, 244.0], [394.0, 241.0], [395.0, 241.0], [400.0, 232.5], [415.0, 236.0], [408.0, 230.0], [413.0, 235.0], [414.0, 233.0], [412.0, 235.0], [403.0, 241.0], [402.0, 235.0], [401.0, 238.0], [409.0, 232.0], [411.0, 234.0], [410.0, 234.0], [405.0, 242.0], [407.0, 240.0], [406.0, 234.0], [404.0, 240.0], [419.0, 230.0], [428.0, 230.0], [425.0, 230.0], [426.0, 215.0], [427.0, 232.0], [417.0, 233.0], [418.0, 233.0], [423.0, 230.5], [416.0, 228.0], [420.0, 235.0], [421.0, 229.0], [422.0, 231.0], [429.0, 216.0], [430.0, 220.0], [431.0, 224.0], [424.0, 231.0], [446.0, 213.0], [433.0, 225.0], [442.0, 233.0], [443.0, 216.0], [447.0, 219.0], [434.0, 227.0], [445.0, 214.0], [435.0, 220.0], [444.0, 213.0], [432.0, 231.5], [437.0, 225.0], [436.0, 221.5], [439.0, 224.0], [438.0, 222.0], [440.0, 228.0], [441.0, 224.0], [460.0, 214.0], [449.0, 215.5], [459.0, 211.0], [456.0, 213.0], [457.0, 215.0], [451.0, 214.0], [458.0, 225.0], [448.0, 212.0], [453.0, 219.0], [452.0, 212.0], [454.0, 209.0], [463.0, 204.5], [462.0, 216.0], [461.0, 204.0], [477.0, 198.0], [479.0, 208.0], [472.0, 201.0], [474.0, 207.0], [475.0, 201.0], [473.0, 214.5], [465.0, 206.0], [468.0, 208.0], [467.0, 198.0], [476.0, 196.0], [478.0, 202.0], [469.0, 209.0], [464.0, 222.0], [470.0, 203.5], [488.0, 218.0], [491.0, 201.0], [480.0, 205.0], [493.0, 194.0], [482.0, 206.5], [489.0, 202.0], [486.0, 198.0], [484.0, 208.0], [487.0, 194.0], [495.0, 194.0], [504.0, 198.0], [496.0, 198.0], [508.0, 185.0], [506.0, 201.0], [502.0, 191.5], [505.0, 196.0], [518.0, 194.5], [512.0, 181.0], [519.0, 198.0], [541.0, 176.0], [522.0, 185.5], [521.0, 184.0], [514.0, 186.0], [536.0, 182.0], [530.0, 184.0], [535.0, 188.0], [553.0, 176.0], [559.0, 176.0], [573.0, 161.0], [565.0, 168.0], [583.0, 160.0], [580.0, 161.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 583.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 160.0, "minX": 260.0, "maxY": 475.5, "series": [{"data": [[260.0, 475.5], [333.0, 273.0], [324.0, 287.5], [332.0, 303.0], [331.0, 288.0], [320.0, 324.5], [326.0, 280.0], [323.0, 283.0], [349.0, 269.0], [351.0, 259.0], [339.0, 280.0], [341.0, 266.0], [338.0, 276.0], [340.0, 274.0], [350.0, 289.0], [348.0, 272.0], [346.0, 243.5], [347.0, 291.0], [344.0, 261.0], [354.0, 258.0], [365.0, 250.0], [359.0, 267.0], [361.0, 263.0], [366.0, 255.0], [367.0, 260.0], [360.0, 264.0], [358.0, 259.0], [357.0, 268.0], [356.0, 283.0], [355.0, 271.0], [363.0, 258.5], [362.0, 253.0], [353.0, 269.0], [352.0, 280.0], [364.0, 257.0], [380.0, 246.0], [371.0, 254.0], [377.0, 250.0], [378.0, 258.0], [379.0, 248.0], [375.0, 243.0], [376.0, 247.0], [383.0, 252.0], [374.0, 256.0], [372.0, 260.0], [373.0, 251.0], [370.0, 250.0], [369.0, 252.0], [368.0, 252.0], [381.0, 244.0], [382.0, 252.0], [387.0, 246.0], [392.0, 248.0], [397.0, 237.0], [396.0, 243.0], [393.0, 240.0], [385.0, 249.0], [384.0, 246.0], [391.0, 235.0], [386.0, 246.0], [390.0, 238.0], [398.0, 237.0], [399.0, 235.0], [389.0, 241.0], [388.0, 244.0], [394.0, 241.0], [395.0, 241.0], [400.0, 232.5], [415.0, 236.0], [408.0, 230.0], [413.0, 235.0], [414.0, 233.0], [412.0, 235.0], [403.0, 241.0], [402.0, 235.0], [401.0, 238.0], [409.0, 232.0], [411.0, 234.0], [410.0, 233.5], [405.0, 242.0], [407.0, 240.0], [406.0, 234.0], [404.0, 240.0], [419.0, 230.0], [428.0, 230.0], [425.0, 230.0], [426.0, 215.0], [427.0, 232.0], [417.0, 233.0], [418.0, 233.0], [423.0, 230.0], [416.0, 228.0], [420.0, 235.0], [421.0, 229.0], [422.0, 231.0], [429.0, 216.0], [430.0, 220.0], [431.0, 224.0], [424.0, 231.0], [446.0, 213.0], [433.0, 225.0], [442.0, 233.0], [443.0, 216.0], [447.0, 219.0], [434.0, 227.0], [445.0, 214.0], [435.0, 220.0], [444.0, 213.0], [432.0, 231.5], [437.0, 225.0], [436.0, 221.5], [439.0, 224.0], [438.0, 222.0], [440.0, 228.0], [441.0, 224.0], [460.0, 214.0], [449.0, 215.0], [459.0, 211.0], [456.0, 213.0], [457.0, 215.0], [451.0, 214.0], [458.0, 225.0], [448.0, 212.0], [453.0, 219.0], [452.0, 212.0], [454.0, 209.0], [463.0, 204.5], [462.0, 215.5], [461.0, 204.0], [477.0, 198.0], [479.0, 208.0], [472.0, 201.0], [474.0, 207.0], [475.0, 201.0], [473.0, 214.5], [465.0, 206.0], [468.0, 208.0], [467.0, 198.0], [476.0, 195.5], [478.0, 202.0], [469.0, 209.0], [464.0, 222.0], [470.0, 203.5], [488.0, 218.0], [491.0, 201.0], [480.0, 205.0], [493.0, 194.0], [482.0, 206.5], [489.0, 201.5], [486.0, 198.0], [484.0, 208.0], [487.0, 194.0], [495.0, 194.0], [504.0, 198.0], [496.0, 198.0], [508.0, 185.0], [506.0, 201.0], [502.0, 191.0], [505.0, 196.0], [518.0, 194.0], [512.0, 181.0], [519.0, 198.0], [541.0, 176.0], [522.0, 185.5], [521.0, 184.0], [514.0, 186.0], [536.0, 182.0], [530.0, 184.0], [535.0, 187.0], [553.0, 176.0], [559.0, 176.0], [573.0, 161.0], [565.0, 168.0], [583.0, 160.0], [580.0, 161.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 583.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 6.0, "minX": 1.61970042E12, "maxY": 458.35, "series": [{"data": [[1.6197006E12, 413.1666666666667], [1.61970078E12, 381.8833333333333], [1.61970072E12, 391.55], [1.6197009E12, 392.6333333333333], [1.61970042E12, 6.0], [1.61970084E12, 393.1166666666667], [1.61970102E12, 354.4166666666667], [1.61970054E12, 458.35], [1.61970096E12, 414.4], [1.61970048E12, 444.7], [1.61970066E12, 415.01666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61970102E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 4.333333333333333, "minX": 1.61970042E12, "maxY": 458.35, "series": [{"data": [[1.6197006E12, 413.1666666666667], [1.61970078E12, 381.8833333333333], [1.61970072E12, 391.55], [1.6197009E12, 392.6333333333333], [1.61970042E12, 4.333333333333333], [1.61970084E12, 393.1166666666667], [1.61970102E12, 356.0833333333333], [1.61970054E12, 458.35], [1.61970096E12, 414.4], [1.61970048E12, 444.7], [1.61970066E12, 415.01666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61970102E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 4.333333333333333, "minX": 1.61970042E12, "maxY": 458.35, "series": [{"data": [[1.6197006E12, 413.1666666666667], [1.61970078E12, 381.8833333333333], [1.61970072E12, 391.55], [1.6197009E12, 392.6333333333333], [1.61970042E12, 4.333333333333333], [1.61970084E12, 393.1166666666667], [1.61970102E12, 356.0833333333333], [1.61970054E12, 458.35], [1.61970096E12, 414.4], [1.61970048E12, 444.7], [1.61970066E12, 415.01666666666665]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61970102E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 4.333333333333333, "minX": 1.61970042E12, "maxY": 458.35, "series": [{"data": [[1.6197006E12, 413.1666666666667], [1.61970078E12, 381.8833333333333], [1.61970072E12, 391.55], [1.6197009E12, 392.6333333333333], [1.61970042E12, 4.333333333333333], [1.61970084E12, 393.1166666666667], [1.61970102E12, 356.0833333333333], [1.61970054E12, 458.35], [1.61970096E12, 414.4], [1.61970048E12, 444.7], [1.61970066E12, 415.01666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61970102E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

