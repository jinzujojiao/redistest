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
        data: {"result": {"minY": 39.0, "minX": 0.0, "maxY": 1379.0, "series": [{"data": [[0.0, 39.0], [0.1, 168.0], [0.2, 171.0], [0.3, 174.0], [0.4, 176.0], [0.5, 177.0], [0.6, 179.0], [0.7, 180.0], [0.8, 181.0], [0.9, 182.0], [1.0, 183.0], [1.1, 183.0], [1.2, 184.0], [1.3, 185.0], [1.4, 185.0], [1.5, 186.0], [1.6, 186.0], [1.7, 187.0], [1.8, 187.0], [1.9, 188.0], [2.0, 188.0], [2.1, 188.0], [2.2, 189.0], [2.3, 189.0], [2.4, 190.0], [2.5, 190.0], [2.6, 190.0], [2.7, 191.0], [2.8, 191.0], [2.9, 191.0], [3.0, 191.0], [3.1, 192.0], [3.2, 192.0], [3.3, 192.0], [3.4, 192.0], [3.5, 193.0], [3.6, 193.0], [3.7, 193.0], [3.8, 193.0], [3.9, 194.0], [4.0, 194.0], [4.1, 194.0], [4.2, 194.0], [4.3, 195.0], [4.4, 195.0], [4.5, 195.0], [4.6, 195.0], [4.7, 195.0], [4.8, 196.0], [4.9, 196.0], [5.0, 196.0], [5.1, 196.0], [5.2, 196.0], [5.3, 197.0], [5.4, 197.0], [5.5, 197.0], [5.6, 197.0], [5.7, 197.0], [5.8, 197.0], [5.9, 198.0], [6.0, 198.0], [6.1, 198.0], [6.2, 198.0], [6.3, 198.0], [6.4, 198.0], [6.5, 199.0], [6.6, 199.0], [6.7, 199.0], [6.8, 199.0], [6.9, 199.0], [7.0, 199.0], [7.1, 200.0], [7.2, 200.0], [7.3, 200.0], [7.4, 200.0], [7.5, 200.0], [7.6, 200.0], [7.7, 201.0], [7.8, 201.0], [7.9, 201.0], [8.0, 201.0], [8.1, 201.0], [8.2, 201.0], [8.3, 201.0], [8.4, 202.0], [8.5, 202.0], [8.6, 202.0], [8.7, 202.0], [8.8, 202.0], [8.9, 202.0], [9.0, 202.0], [9.1, 203.0], [9.2, 203.0], [9.3, 203.0], [9.4, 203.0], [9.5, 203.0], [9.6, 203.0], [9.7, 203.0], [9.8, 203.0], [9.9, 204.0], [10.0, 204.0], [10.1, 204.0], [10.2, 204.0], [10.3, 204.0], [10.4, 204.0], [10.5, 204.0], [10.6, 204.0], [10.7, 205.0], [10.8, 205.0], [10.9, 205.0], [11.0, 205.0], [11.1, 205.0], [11.2, 205.0], [11.3, 205.0], [11.4, 205.0], [11.5, 205.0], [11.6, 206.0], [11.7, 206.0], [11.8, 206.0], [11.9, 206.0], [12.0, 206.0], [12.1, 206.0], [12.2, 206.0], [12.3, 206.0], [12.4, 206.0], [12.5, 207.0], [12.6, 207.0], [12.7, 207.0], [12.8, 207.0], [12.9, 207.0], [13.0, 207.0], [13.1, 207.0], [13.2, 207.0], [13.3, 207.0], [13.4, 207.0], [13.5, 208.0], [13.6, 208.0], [13.7, 208.0], [13.8, 208.0], [13.9, 208.0], [14.0, 208.0], [14.1, 208.0], [14.2, 208.0], [14.3, 208.0], [14.4, 208.0], [14.5, 209.0], [14.6, 209.0], [14.7, 209.0], [14.8, 209.0], [14.9, 209.0], [15.0, 209.0], [15.1, 209.0], [15.2, 209.0], [15.3, 209.0], [15.4, 209.0], [15.5, 210.0], [15.6, 210.0], [15.7, 210.0], [15.8, 210.0], [15.9, 210.0], [16.0, 210.0], [16.1, 210.0], [16.2, 210.0], [16.3, 210.0], [16.4, 210.0], [16.5, 210.0], [16.6, 211.0], [16.7, 211.0], [16.8, 211.0], [16.9, 211.0], [17.0, 211.0], [17.1, 211.0], [17.2, 211.0], [17.3, 211.0], [17.4, 211.0], [17.5, 211.0], [17.6, 211.0], [17.7, 212.0], [17.8, 212.0], [17.9, 212.0], [18.0, 212.0], [18.1, 212.0], [18.2, 212.0], [18.3, 212.0], [18.4, 212.0], [18.5, 212.0], [18.6, 212.0], [18.7, 212.0], [18.8, 213.0], [18.9, 213.0], [19.0, 213.0], [19.1, 213.0], [19.2, 213.0], [19.3, 213.0], [19.4, 213.0], [19.5, 213.0], [19.6, 213.0], [19.7, 213.0], [19.8, 213.0], [19.9, 213.0], [20.0, 214.0], [20.1, 214.0], [20.2, 214.0], [20.3, 214.0], [20.4, 214.0], [20.5, 214.0], [20.6, 214.0], [20.7, 214.0], [20.8, 214.0], [20.9, 214.0], [21.0, 214.0], [21.1, 214.0], [21.2, 215.0], [21.3, 215.0], [21.4, 215.0], [21.5, 215.0], [21.6, 215.0], [21.7, 215.0], [21.8, 215.0], [21.9, 215.0], [22.0, 215.0], [22.1, 215.0], [22.2, 215.0], [22.3, 215.0], [22.4, 215.0], [22.5, 216.0], [22.6, 216.0], [22.7, 216.0], [22.8, 216.0], [22.9, 216.0], [23.0, 216.0], [23.1, 216.0], [23.2, 216.0], [23.3, 216.0], [23.4, 216.0], [23.5, 216.0], [23.6, 216.0], [23.7, 217.0], [23.8, 217.0], [23.9, 217.0], [24.0, 217.0], [24.1, 217.0], [24.2, 217.0], [24.3, 217.0], [24.4, 217.0], [24.5, 217.0], [24.6, 217.0], [24.7, 217.0], [24.8, 217.0], [24.9, 217.0], [25.0, 217.0], [25.1, 218.0], [25.2, 218.0], [25.3, 218.0], [25.4, 218.0], [25.5, 218.0], [25.6, 218.0], [25.7, 218.0], [25.8, 218.0], [25.9, 218.0], [26.0, 218.0], [26.1, 218.0], [26.2, 218.0], [26.3, 218.0], [26.4, 219.0], [26.5, 219.0], [26.6, 219.0], [26.7, 219.0], [26.8, 219.0], [26.9, 219.0], [27.0, 219.0], [27.1, 219.0], [27.2, 219.0], [27.3, 219.0], [27.4, 219.0], [27.5, 219.0], [27.6, 219.0], [27.7, 219.0], [27.8, 220.0], [27.9, 220.0], [28.0, 220.0], [28.1, 220.0], [28.2, 220.0], [28.3, 220.0], [28.4, 220.0], [28.5, 220.0], [28.6, 220.0], [28.7, 220.0], [28.8, 220.0], [28.9, 220.0], [29.0, 220.0], [29.1, 220.0], [29.2, 221.0], [29.3, 221.0], [29.4, 221.0], [29.5, 221.0], [29.6, 221.0], [29.7, 221.0], [29.8, 221.0], [29.9, 221.0], [30.0, 221.0], [30.1, 221.0], [30.2, 221.0], [30.3, 221.0], [30.4, 221.0], [30.5, 221.0], [30.6, 222.0], [30.7, 222.0], [30.8, 222.0], [30.9, 222.0], [31.0, 222.0], [31.1, 222.0], [31.2, 222.0], [31.3, 222.0], [31.4, 222.0], [31.5, 222.0], [31.6, 222.0], [31.7, 222.0], [31.8, 222.0], [31.9, 222.0], [32.0, 222.0], [32.1, 223.0], [32.2, 223.0], [32.3, 223.0], [32.4, 223.0], [32.5, 223.0], [32.6, 223.0], [32.7, 223.0], [32.8, 223.0], [32.9, 223.0], [33.0, 223.0], [33.1, 223.0], [33.2, 223.0], [33.3, 223.0], [33.4, 223.0], [33.5, 223.0], [33.6, 224.0], [33.7, 224.0], [33.8, 224.0], [33.9, 224.0], [34.0, 224.0], [34.1, 224.0], [34.2, 224.0], [34.3, 224.0], [34.4, 224.0], [34.5, 224.0], [34.6, 224.0], [34.7, 224.0], [34.8, 224.0], [34.9, 224.0], [35.0, 224.0], [35.1, 225.0], [35.2, 225.0], [35.3, 225.0], [35.4, 225.0], [35.5, 225.0], [35.6, 225.0], [35.7, 225.0], [35.8, 225.0], [35.9, 225.0], [36.0, 225.0], [36.1, 225.0], [36.2, 225.0], [36.3, 225.0], [36.4, 225.0], [36.5, 225.0], [36.6, 226.0], [36.7, 226.0], [36.8, 226.0], [36.9, 226.0], [37.0, 226.0], [37.1, 226.0], [37.2, 226.0], [37.3, 226.0], [37.4, 226.0], [37.5, 226.0], [37.6, 226.0], [37.7, 226.0], [37.8, 226.0], [37.9, 226.0], [38.0, 226.0], [38.1, 227.0], [38.2, 227.0], [38.3, 227.0], [38.4, 227.0], [38.5, 227.0], [38.6, 227.0], [38.7, 227.0], [38.8, 227.0], [38.9, 227.0], [39.0, 227.0], [39.1, 227.0], [39.2, 227.0], [39.3, 227.0], [39.4, 227.0], [39.5, 227.0], [39.6, 228.0], [39.7, 228.0], [39.8, 228.0], [39.9, 228.0], [40.0, 228.0], [40.1, 228.0], [40.2, 228.0], [40.3, 228.0], [40.4, 228.0], [40.5, 228.0], [40.6, 228.0], [40.7, 228.0], [40.8, 228.0], [40.9, 228.0], [41.0, 228.0], [41.1, 229.0], [41.2, 229.0], [41.3, 229.0], [41.4, 229.0], [41.5, 229.0], [41.6, 229.0], [41.7, 229.0], [41.8, 229.0], [41.9, 229.0], [42.0, 229.0], [42.1, 229.0], [42.2, 229.0], [42.3, 229.0], [42.4, 229.0], [42.5, 229.0], [42.6, 230.0], [42.7, 230.0], [42.8, 230.0], [42.9, 230.0], [43.0, 230.0], [43.1, 230.0], [43.2, 230.0], [43.3, 230.0], [43.4, 230.0], [43.5, 230.0], [43.6, 230.0], [43.7, 230.0], [43.8, 230.0], [43.9, 230.0], [44.0, 230.0], [44.1, 231.0], [44.2, 231.0], [44.3, 231.0], [44.4, 231.0], [44.5, 231.0], [44.6, 231.0], [44.7, 231.0], [44.8, 231.0], [44.9, 231.0], [45.0, 231.0], [45.1, 231.0], [45.2, 231.0], [45.3, 231.0], [45.4, 231.0], [45.5, 231.0], [45.6, 232.0], [45.7, 232.0], [45.8, 232.0], [45.9, 232.0], [46.0, 232.0], [46.1, 232.0], [46.2, 232.0], [46.3, 232.0], [46.4, 232.0], [46.5, 232.0], [46.6, 232.0], [46.7, 232.0], [46.8, 232.0], [46.9, 232.0], [47.0, 232.0], [47.1, 233.0], [47.2, 233.0], [47.3, 233.0], [47.4, 233.0], [47.5, 233.0], [47.6, 233.0], [47.7, 233.0], [47.8, 233.0], [47.9, 233.0], [48.0, 233.0], [48.1, 233.0], [48.2, 233.0], [48.3, 233.0], [48.4, 233.0], [48.5, 233.0], [48.6, 234.0], [48.7, 234.0], [48.8, 234.0], [48.9, 234.0], [49.0, 234.0], [49.1, 234.0], [49.2, 234.0], [49.3, 234.0], [49.4, 234.0], [49.5, 234.0], [49.6, 234.0], [49.7, 234.0], [49.8, 234.0], [49.9, 234.0], [50.0, 235.0], [50.1, 235.0], [50.2, 235.0], [50.3, 235.0], [50.4, 235.0], [50.5, 235.0], [50.6, 235.0], [50.7, 235.0], [50.8, 235.0], [50.9, 235.0], [51.0, 235.0], [51.1, 235.0], [51.2, 235.0], [51.3, 235.0], [51.4, 235.0], [51.5, 236.0], [51.6, 236.0], [51.7, 236.0], [51.8, 236.0], [51.9, 236.0], [52.0, 236.0], [52.1, 236.0], [52.2, 236.0], [52.3, 236.0], [52.4, 236.0], [52.5, 236.0], [52.6, 236.0], [52.7, 236.0], [52.8, 236.0], [52.9, 237.0], [53.0, 237.0], [53.1, 237.0], [53.2, 237.0], [53.3, 237.0], [53.4, 237.0], [53.5, 237.0], [53.6, 237.0], [53.7, 237.0], [53.8, 237.0], [53.9, 237.0], [54.0, 237.0], [54.1, 237.0], [54.2, 237.0], [54.3, 238.0], [54.4, 238.0], [54.5, 238.0], [54.6, 238.0], [54.7, 238.0], [54.8, 238.0], [54.9, 238.0], [55.0, 238.0], [55.1, 238.0], [55.2, 238.0], [55.3, 238.0], [55.4, 238.0], [55.5, 238.0], [55.6, 238.0], [55.7, 239.0], [55.8, 239.0], [55.9, 239.0], [56.0, 239.0], [56.1, 239.0], [56.2, 239.0], [56.3, 239.0], [56.4, 239.0], [56.5, 239.0], [56.6, 239.0], [56.7, 239.0], [56.8, 239.0], [56.9, 239.0], [57.0, 239.0], [57.1, 240.0], [57.2, 240.0], [57.3, 240.0], [57.4, 240.0], [57.5, 240.0], [57.6, 240.0], [57.7, 240.0], [57.8, 240.0], [57.9, 240.0], [58.0, 240.0], [58.1, 240.0], [58.2, 240.0], [58.3, 240.0], [58.4, 241.0], [58.5, 241.0], [58.6, 241.0], [58.7, 241.0], [58.8, 241.0], [58.9, 241.0], [59.0, 241.0], [59.1, 241.0], [59.2, 241.0], [59.3, 241.0], [59.4, 241.0], [59.5, 241.0], [59.6, 241.0], [59.7, 241.0], [59.8, 242.0], [59.9, 242.0], [60.0, 242.0], [60.1, 242.0], [60.2, 242.0], [60.3, 242.0], [60.4, 242.0], [60.5, 242.0], [60.6, 242.0], [60.7, 242.0], [60.8, 242.0], [60.9, 242.0], [61.0, 242.0], [61.1, 242.0], [61.2, 243.0], [61.3, 243.0], [61.4, 243.0], [61.5, 243.0], [61.6, 243.0], [61.7, 243.0], [61.8, 243.0], [61.9, 243.0], [62.0, 243.0], [62.1, 243.0], [62.2, 243.0], [62.3, 243.0], [62.4, 243.0], [62.5, 244.0], [62.6, 244.0], [62.7, 244.0], [62.8, 244.0], [62.9, 244.0], [63.0, 244.0], [63.1, 244.0], [63.2, 244.0], [63.3, 244.0], [63.4, 244.0], [63.5, 244.0], [63.6, 244.0], [63.7, 244.0], [63.8, 245.0], [63.9, 245.0], [64.0, 245.0], [64.1, 245.0], [64.2, 245.0], [64.3, 245.0], [64.4, 245.0], [64.5, 245.0], [64.6, 245.0], [64.7, 245.0], [64.8, 245.0], [64.9, 245.0], [65.0, 245.0], [65.1, 246.0], [65.2, 246.0], [65.3, 246.0], [65.4, 246.0], [65.5, 246.0], [65.6, 246.0], [65.7, 246.0], [65.8, 246.0], [65.9, 246.0], [66.0, 246.0], [66.1, 246.0], [66.2, 246.0], [66.3, 247.0], [66.4, 247.0], [66.5, 247.0], [66.6, 247.0], [66.7, 247.0], [66.8, 247.0], [66.9, 247.0], [67.0, 247.0], [67.1, 247.0], [67.2, 247.0], [67.3, 247.0], [67.4, 247.0], [67.5, 247.0], [67.6, 248.0], [67.7, 248.0], [67.8, 248.0], [67.9, 248.0], [68.0, 248.0], [68.1, 248.0], [68.2, 248.0], [68.3, 248.0], [68.4, 248.0], [68.5, 248.0], [68.6, 248.0], [68.7, 248.0], [68.8, 249.0], [68.9, 249.0], [69.0, 249.0], [69.1, 249.0], [69.2, 249.0], [69.3, 249.0], [69.4, 249.0], [69.5, 249.0], [69.6, 249.0], [69.7, 249.0], [69.8, 249.0], [69.9, 249.0], [70.0, 250.0], [70.1, 250.0], [70.2, 250.0], [70.3, 250.0], [70.4, 250.0], [70.5, 250.0], [70.6, 250.0], [70.7, 250.0], [70.8, 250.0], [70.9, 250.0], [71.0, 250.0], [71.1, 250.0], [71.2, 251.0], [71.3, 251.0], [71.4, 251.0], [71.5, 251.0], [71.6, 251.0], [71.7, 251.0], [71.8, 251.0], [71.9, 251.0], [72.0, 251.0], [72.1, 251.0], [72.2, 251.0], [72.3, 252.0], [72.4, 252.0], [72.5, 252.0], [72.6, 252.0], [72.7, 252.0], [72.8, 252.0], [72.9, 252.0], [73.0, 252.0], [73.1, 252.0], [73.2, 252.0], [73.3, 252.0], [73.4, 253.0], [73.5, 253.0], [73.6, 253.0], [73.7, 253.0], [73.8, 253.0], [73.9, 253.0], [74.0, 253.0], [74.1, 253.0], [74.2, 253.0], [74.3, 253.0], [74.4, 253.0], [74.5, 254.0], [74.6, 254.0], [74.7, 254.0], [74.8, 254.0], [74.9, 254.0], [75.0, 254.0], [75.1, 254.0], [75.2, 254.0], [75.3, 254.0], [75.4, 254.0], [75.5, 255.0], [75.6, 255.0], [75.7, 255.0], [75.8, 255.0], [75.9, 255.0], [76.0, 255.0], [76.1, 255.0], [76.2, 255.0], [76.3, 255.0], [76.4, 255.0], [76.5, 256.0], [76.6, 256.0], [76.7, 256.0], [76.8, 256.0], [76.9, 256.0], [77.0, 256.0], [77.1, 256.0], [77.2, 256.0], [77.3, 256.0], [77.4, 256.0], [77.5, 257.0], [77.6, 257.0], [77.7, 257.0], [77.8, 257.0], [77.9, 257.0], [78.0, 257.0], [78.1, 257.0], [78.2, 257.0], [78.3, 257.0], [78.4, 257.0], [78.5, 258.0], [78.6, 258.0], [78.7, 258.0], [78.8, 258.0], [78.9, 258.0], [79.0, 258.0], [79.1, 258.0], [79.2, 258.0], [79.3, 258.0], [79.4, 259.0], [79.5, 259.0], [79.6, 259.0], [79.7, 259.0], [79.8, 259.0], [79.9, 259.0], [80.0, 259.0], [80.1, 259.0], [80.2, 259.0], [80.3, 260.0], [80.4, 260.0], [80.5, 260.0], [80.6, 260.0], [80.7, 260.0], [80.8, 260.0], [80.9, 260.0], [81.0, 260.0], [81.1, 260.0], [81.2, 261.0], [81.3, 261.0], [81.4, 261.0], [81.5, 261.0], [81.6, 261.0], [81.7, 261.0], [81.8, 261.0], [81.9, 261.0], [82.0, 262.0], [82.1, 262.0], [82.2, 262.0], [82.3, 262.0], [82.4, 262.0], [82.5, 262.0], [82.6, 262.0], [82.7, 262.0], [82.8, 263.0], [82.9, 263.0], [83.0, 263.0], [83.1, 263.0], [83.2, 263.0], [83.3, 263.0], [83.4, 263.0], [83.5, 263.0], [83.6, 264.0], [83.7, 264.0], [83.8, 264.0], [83.9, 264.0], [84.0, 264.0], [84.1, 264.0], [84.2, 264.0], [84.3, 264.0], [84.4, 265.0], [84.5, 265.0], [84.6, 265.0], [84.7, 265.0], [84.8, 265.0], [84.9, 265.0], [85.0, 265.0], [85.1, 266.0], [85.2, 266.0], [85.3, 266.0], [85.4, 266.0], [85.5, 266.0], [85.6, 266.0], [85.7, 266.0], [85.8, 267.0], [85.9, 267.0], [86.0, 267.0], [86.1, 267.0], [86.2, 267.0], [86.3, 267.0], [86.4, 267.0], [86.5, 268.0], [86.6, 268.0], [86.7, 268.0], [86.8, 268.0], [86.9, 268.0], [87.0, 268.0], [87.1, 268.0], [87.2, 269.0], [87.3, 269.0], [87.4, 269.0], [87.5, 269.0], [87.6, 269.0], [87.7, 269.0], [87.8, 269.0], [87.9, 270.0], [88.0, 270.0], [88.1, 270.0], [88.2, 270.0], [88.3, 270.0], [88.4, 270.0], [88.5, 271.0], [88.6, 271.0], [88.7, 271.0], [88.8, 271.0], [88.9, 271.0], [89.0, 271.0], [89.1, 272.0], [89.2, 272.0], [89.3, 272.0], [89.4, 272.0], [89.5, 272.0], [89.6, 272.0], [89.7, 273.0], [89.8, 273.0], [89.9, 273.0], [90.0, 273.0], [90.1, 273.0], [90.2, 274.0], [90.3, 274.0], [90.4, 274.0], [90.5, 274.0], [90.6, 274.0], [90.7, 275.0], [90.8, 275.0], [90.9, 275.0], [91.0, 275.0], [91.1, 275.0], [91.2, 276.0], [91.3, 276.0], [91.4, 276.0], [91.5, 276.0], [91.6, 276.0], [91.7, 277.0], [91.8, 277.0], [91.9, 277.0], [92.0, 277.0], [92.1, 278.0], [92.2, 278.0], [92.3, 278.0], [92.4, 278.0], [92.5, 279.0], [92.6, 279.0], [92.7, 279.0], [92.8, 279.0], [92.9, 280.0], [93.0, 280.0], [93.1, 280.0], [93.2, 280.0], [93.3, 281.0], [93.4, 281.0], [93.5, 281.0], [93.6, 282.0], [93.7, 282.0], [93.8, 282.0], [93.9, 282.0], [94.0, 283.0], [94.1, 283.0], [94.2, 283.0], [94.3, 284.0], [94.4, 284.0], [94.5, 284.0], [94.6, 285.0], [94.7, 285.0], [94.8, 285.0], [94.9, 286.0], [95.0, 286.0], [95.1, 286.0], [95.2, 287.0], [95.3, 287.0], [95.4, 288.0], [95.5, 288.0], [95.6, 288.0], [95.7, 289.0], [95.8, 289.0], [95.9, 289.0], [96.0, 290.0], [96.1, 290.0], [96.2, 291.0], [96.3, 291.0], [96.4, 292.0], [96.5, 292.0], [96.6, 293.0], [96.7, 293.0], [96.8, 294.0], [96.9, 294.0], [97.0, 295.0], [97.1, 295.0], [97.2, 296.0], [97.3, 296.0], [97.4, 297.0], [97.5, 298.0], [97.6, 298.0], [97.7, 299.0], [97.8, 300.0], [97.9, 301.0], [98.0, 301.0], [98.1, 302.0], [98.2, 303.0], [98.3, 304.0], [98.4, 305.0], [98.5, 307.0], [98.6, 308.0], [98.7, 309.0], [98.8, 310.0], [98.9, 312.0], [99.0, 314.0], [99.1, 316.0], [99.2, 318.0], [99.3, 321.0], [99.4, 324.0], [99.5, 328.0], [99.6, 333.0], [99.7, 342.0], [99.8, 357.0], [99.9, 420.0], [100.0, 1379.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 688051.0, "series": [{"data": [[0.0, 23.0], [300.0, 16041.0], [1200.0, 61.0], [1300.0, 9.0], [100.0, 53133.0], [200.0, 688051.0], [400.0, 869.0], [800.0, 3.0], [500.0, 63.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 132.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 758121.0, "series": [{"data": [[0.0, 758121.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 132.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 298.204253586419, "minX": 1.62028284E12, "maxY": 300.0, "series": [{"data": [[1.6202832E12, 300.0], [1.6202829E12, 300.0], [1.62028338E12, 300.0], [1.62028308E12, 300.0], [1.62028326E12, 300.0], [1.62028296E12, 300.0], [1.62028344E12, 298.98052707023976], [1.62028314E12, 300.0], [1.62028284E12, 298.204253586419], [1.62028332E12, 300.0], [1.62028302E12, 300.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62028344E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 56.0, "minX": 6.0, "maxY": 477.0, "series": [{"data": [[6.0, 149.0], [12.0, 134.66666666666666], [14.0, 131.0], [16.0, 183.0], [17.0, 138.0], [18.0, 153.0], [20.0, 144.0], [21.0, 228.0], [22.0, 184.5], [23.0, 146.5], [24.0, 233.0], [25.0, 186.5], [28.0, 212.6], [30.0, 228.0], [31.0, 230.0], [33.0, 148.5], [32.0, 231.0], [35.0, 128.0], [36.0, 139.0], [39.0, 140.0], [38.0, 172.33333333333334], [40.0, 142.0], [43.0, 145.5], [42.0, 144.0], [45.0, 146.0], [44.0, 220.0], [46.0, 218.0], [48.0, 221.0], [53.0, 227.0], [55.0, 225.83333333333334], [57.0, 229.0], [60.0, 238.33333333333334], [63.0, 229.0], [62.0, 227.0], [67.0, 286.0], [66.0, 289.3333333333333], [65.0, 286.0], [71.0, 259.0], [70.0, 477.0], [68.0, 270.5], [73.0, 156.5], [74.0, 87.125], [75.0, 56.0], [72.0, 236.0], [78.0, 75.0], [79.0, 230.0], [81.0, 124.0], [82.0, 81.5], [83.0, 226.25], [84.0, 103.0], [85.0, 172.0], [86.0, 179.5], [87.0, 222.0], [89.0, 86.5], [90.0, 139.5], [92.0, 180.8], [95.0, 222.0], [93.0, 226.5], [98.0, 133.0], [99.0, 218.0], [100.0, 157.66666666666669], [101.0, 147.625], [102.0, 200.0], [103.0, 222.33333333333334], [107.0, 229.0], [106.0, 222.0], [104.0, 224.0], [110.0, 172.0], [111.0, 193.8], [108.0, 227.0], [112.0, 171.2857142857143], [113.0, 210.0], [115.0, 232.0], [114.0, 232.0], [116.0, 151.54545454545456], [117.0, 135.5], [118.0, 136.33333333333334], [119.0, 230.66666666666666], [123.0, 231.0], [120.0, 231.0], [126.0, 176.22222222222223], [127.0, 230.0], [124.0, 232.0], [130.0, 137.0], [132.0, 165.0], [135.0, 200.5], [134.0, 242.5], [133.0, 240.0], [131.0, 241.0], [129.0, 231.33333333333334], [128.0, 231.0], [136.0, 168.75], [139.0, 161.0], [140.0, 202.5], [141.0, 179.4], [143.0, 243.0], [138.0, 242.5], [137.0, 242.0], [145.0, 169.0], [148.0, 216.2], [149.0, 183.14285714285714], [150.0, 171.1818181818182], [151.0, 158.0], [146.0, 246.5], [144.0, 244.0], [152.0, 216.33333333333334], [153.0, 183.75], [155.0, 168.16666666666666], [156.0, 180.8], [157.0, 177.8], [158.0, 145.0], [159.0, 172.0], [154.0, 249.0], [160.0, 193.0], [161.0, 154.66666666666669], [162.0, 188.0], [167.0, 253.0], [165.0, 251.5], [163.0, 249.0], [170.0, 205.71428571428572], [171.0, 168.33333333333334], [172.0, 195.66666666666666], [173.0, 201.2], [175.0, 229.0], [168.0, 250.0], [176.0, 188.6], [182.0, 201.66666666666666], [183.0, 196.0], [181.0, 225.0], [180.0, 225.0], [179.0, 225.0], [177.0, 229.0], [184.0, 165.58333333333334], [185.0, 171.8], [186.0, 186.0], [187.0, 162.0], [189.0, 175.25], [190.0, 176.1], [191.0, 177.25], [188.0, 207.0], [195.0, 174.7142857142857], [196.0, 142.66666666666666], [197.0, 169.0], [199.0, 222.66666666666666], [198.0, 222.0], [194.0, 239.66666666666666], [192.0, 208.0], [200.0, 152.0], [201.0, 233.5], [202.0, 197.1], [203.0, 164.33333333333334], [204.0, 243.66666666666666], [206.0, 196.55555555555554], [207.0, 172.25], [210.0, 209.11111111111111], [212.0, 175.0], [213.0, 175.24999999999997], [214.0, 193.4], [215.0, 206.0], [208.0, 279.5], [216.0, 224.33333333333334], [217.0, 195.45454545454547], [218.0, 191.14285714285714], [219.0, 175.61538461538458], [220.0, 200.0], [221.0, 173.0], [222.0, 221.8], [223.0, 159.5], [224.0, 166.75], [225.0, 175.5], [226.0, 198.0], [227.0, 199.66666666666666], [228.0, 181.0], [230.0, 164.5], [231.0, 165.2], [232.0, 159.0], [233.0, 177.66666666666666], [234.0, 154.0], [235.0, 181.2857142857143], [236.0, 178.6363636363636], [237.0, 157.83333333333334], [238.0, 156.0], [239.0, 236.6], [240.0, 159.5], [241.0, 234.0], [243.0, 162.0], [245.0, 173.66666666666666], [247.0, 179.18181818181816], [246.0, 223.5], [244.0, 251.0], [248.0, 166.6], [249.0, 206.0], [251.0, 193.7], [252.0, 174.0], [254.0, 185.33333333333331], [255.0, 220.0], [257.0, 181.88888888888886], [256.0, 194.75], [258.0, 181.0], [259.0, 180.0], [261.0, 203.5], [260.0, 217.0], [262.0, 168.0], [263.0, 190.0], [264.0, 203.0], [271.0, 182.75], [270.0, 233.75], [268.0, 183.0], [269.0, 195.41666666666666], [265.0, 173.0], [266.0, 179.11111111111111], [267.0, 221.0], [274.0, 200.0], [275.0, 207.0], [284.0, 198.75], [285.0, 197.0], [286.0, 203.7142857142857], [287.0, 200.0], [276.0, 183.07142857142856], [277.0, 201.66666666666666], [273.0, 225.2], [278.0, 180.85714285714286], [279.0, 178.5], [272.0, 234.0], [280.0, 181.85714285714286], [281.0, 182.0], [282.0, 197.46666666666667], [283.0, 196.66666666666666], [289.0, 197.91666666666669], [288.0, 202.42857142857142], [290.0, 208.2941176470588], [291.0, 177.0], [292.0, 223.33333333333334], [293.0, 228.39999999999998], [294.0, 225.9230769230769], [295.0, 224.88888888888889], [296.0, 214.0], [300.0, 237.31060903188973], [297.0, 183.66666666666666], [299.0, 196.375], [298.0, 225.8]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[299.86342289446617, 237.2490764955744]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 84071.8, "minX": 1.62028284E12, "maxY": 393273.4666666667, "series": [{"data": [[1.6202832E12, 377183.6666666667], [1.6202829E12, 375996.13333333336], [1.62028338E12, 379279.3333333333], [1.62028308E12, 383669.0], [1.62028326E12, 393273.4666666667], [1.62028296E12, 390904.2], [1.62028344E12, 229458.0], [1.62028314E12, 374425.4666666667], [1.62028284E12, 161613.4], [1.62028332E12, 389257.5333333333], [1.62028302E12, 383130.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6202832E12, 196262.33333333334], [1.6202829E12, 195569.76666666666], [1.62028338E12, 197276.16666666666], [1.62028308E12, 199633.0], [1.62028326E12, 204549.43333333332], [1.62028296E12, 203393.4], [1.62028344E12, 119408.5], [1.62028314E12, 194753.43333333332], [1.62028284E12, 84071.8], [1.62028332E12, 202537.56666666668], [1.62028302E12, 199277.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62028344E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 222.351187120214, "minX": 1.62028284E12, "maxY": 243.33980556269177, "series": [{"data": [[1.6202832E12, 241.4843016235096], [1.6202829E12, 242.2758560329635], [1.62028338E12, 240.0895014349593], [1.62028308E12, 237.3666270940501], [1.62028326E12, 231.7498101111013], [1.62028296E12, 233.02430150961936], [1.62028344E12, 239.08181717940192], [1.62028314E12, 243.33980556269177], [1.62028284E12, 222.351187120214], [1.62028332E12, 233.9368247240407], [1.62028302E12, 237.77276511397397]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62028344E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 222.30395289106062, "minX": 1.62028284E12, "maxY": 243.28716686723195, "series": [{"data": [[1.6202832E12, 241.435931839528], [1.6202829E12, 242.22732842312158], [1.62028338E12, 240.0434625909381], [1.62028308E12, 237.31556522886373], [1.62028326E12, 231.70506070007798], [1.62028296E12, 232.98237913980182], [1.62028344E12, 239.03504245231122], [1.62028314E12, 243.28716686723195], [1.62028284E12, 222.30395289106062], [1.62028332E12, 233.89235889901613], [1.62028302E12, 237.73065080938164]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62028344E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.054153088957097, "minX": 1.62028284E12, "maxY": 0.36425184695115587, "series": [{"data": [[1.6202832E12, 0.1810143566349122], [1.6202829E12, 0.1943393431806856], [1.62028338E12, 0.11976239738370119], [1.62028308E12, 0.1760717583432274], [1.62028326E12, 0.06094468117975681], [1.62028296E12, 0.16503534529635713], [1.62028344E12, 0.36425184695115587], [1.62028314E12, 0.054153088957097], [1.62028284E12, 0.22263985466391076], [1.62028332E12, 0.13875417679716084], [1.62028302E12, 0.06136769078295356]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62028344E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 39.0, "minX": 1.62028284E12, "maxY": 1379.0, "series": [{"data": [[1.6202832E12, 1286.0], [1.6202829E12, 1334.0], [1.62028338E12, 1332.0], [1.62028308E12, 1312.0], [1.62028326E12, 1243.0], [1.62028296E12, 1295.0], [1.62028344E12, 1379.0], [1.62028314E12, 1287.0], [1.62028284E12, 1289.0], [1.62028332E12, 1296.0], [1.62028302E12, 1234.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6202832E12, 275.0], [1.6202829E12, 274.0], [1.62028338E12, 263.0], [1.62028308E12, 273.0], [1.62028326E12, 260.0], [1.62028296E12, 270.0], [1.62028344E12, 253.0], [1.62028314E12, 256.0], [1.62028284E12, 253.0], [1.62028332E12, 264.0], [1.62028302E12, 270.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6202832E12, 308.0], [1.6202829E12, 312.9900000000016], [1.62028338E12, 302.0], [1.62028308E12, 307.9900000000016], [1.62028326E12, 294.0], [1.62028296E12, 407.0], [1.62028344E12, 283.0], [1.62028314E12, 285.0], [1.62028284E12, 276.0], [1.62028332E12, 294.0], [1.62028302E12, 296.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6202832E12, 288.0], [1.6202829E12, 288.0], [1.62028338E12, 277.0], [1.62028308E12, 284.0], [1.62028326E12, 273.0], [1.62028296E12, 288.0], [1.62028344E12, 263.0], [1.62028314E12, 267.0], [1.62028284E12, 260.0], [1.62028332E12, 273.0], [1.62028302E12, 280.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6202832E12, 152.0], [1.6202829E12, 143.0], [1.62028338E12, 133.0], [1.62028308E12, 149.0], [1.62028326E12, 156.0], [1.62028296E12, 144.0], [1.62028344E12, 117.0], [1.62028314E12, 133.0], [1.62028284E12, 39.0], [1.62028332E12, 158.0], [1.62028302E12, 140.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6202832E12, 239.0], [1.6202829E12, 232.0], [1.62028338E12, 225.0], [1.62028308E12, 241.0], [1.62028326E12, 224.0], [1.62028296E12, 232.0], [1.62028344E12, 223.0], [1.62028314E12, 228.0], [1.62028284E12, 224.0], [1.62028332E12, 230.0], [1.62028302E12, 232.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62028344E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 64.0, "minX": 11.0, "maxY": 318.0, "series": [{"data": [[11.0, 64.0], [173.0, 231.0], [927.0, 318.0], [958.0, 258.0], [982.0, 258.0], [1008.0, 244.0], [1019.0, 292.0], [1059.0, 261.0], [1086.0, 273.0], [1058.0, 277.0], [1068.0, 266.0], [1061.0, 281.0], [1065.0, 272.0], [1060.0, 271.0], [1069.0, 268.0], [1051.0, 295.0], [1070.0, 270.0], [1046.0, 286.0], [1040.0, 228.0], [1076.0, 269.0], [1074.0, 276.0], [1055.0, 278.0], [1138.0, 267.0], [1147.0, 268.0], [1151.0, 255.0], [1120.0, 265.0], [1125.0, 270.0], [1126.0, 252.0], [1121.0, 263.0], [1095.0, 269.0], [1145.0, 256.0], [1139.0, 268.0], [1141.0, 263.0], [1142.0, 262.0], [1143.0, 257.0], [1101.0, 272.0], [1136.0, 263.0], [1137.0, 260.0], [1102.0, 269.0], [1146.0, 254.0], [1105.0, 263.0], [1109.0, 272.0], [1107.0, 270.0], [1106.0, 260.0], [1148.0, 255.0], [1149.0, 262.0], [1150.0, 260.0], [1092.0, 267.0], [1089.0, 282.0], [1093.0, 268.0], [1115.0, 270.0], [1127.0, 257.0], [1129.0, 262.0], [1128.0, 268.0], [1130.0, 264.0], [1133.0, 255.0], [1135.0, 266.0], [1134.0, 271.0], [1131.0, 259.0], [1203.0, 249.0], [1157.0, 262.0], [1183.0, 255.0], [1214.0, 242.0], [1208.0, 245.0], [1211.0, 248.0], [1209.0, 247.0], [1213.0, 249.0], [1212.0, 242.0], [1207.0, 250.0], [1206.0, 257.0], [1204.0, 250.0], [1205.0, 249.0], [1193.0, 253.0], [1190.0, 244.0], [1191.0, 255.0], [1192.0, 254.0], [1194.0, 246.0], [1195.0, 251.0], [1197.0, 248.0], [1198.0, 247.0], [1199.0, 244.0], [1188.0, 247.0], [1186.0, 241.0], [1184.0, 248.0], [1185.0, 263.0], [1215.0, 242.0], [1187.0, 249.0], [1156.0, 256.0], [1154.0, 261.0], [1152.0, 259.0], [1155.0, 252.0], [1158.0, 253.0], [1159.0, 262.0], [1161.0, 267.0], [1160.0, 253.0], [1162.0, 256.0], [1163.0, 263.0], [1164.0, 255.0], [1165.0, 261.0], [1166.0, 260.0], [1202.0, 250.0], [1200.0, 244.0], [1182.0, 242.0], [1170.0, 259.0], [1169.0, 244.0], [1168.0, 263.0], [1177.0, 245.0], [1178.0, 258.0], [1179.0, 250.0], [1180.0, 252.0], [1176.0, 259.0], [1173.0, 253.0], [1172.0, 256.0], [1174.0, 253.0], [1181.0, 259.0], [1219.0, 245.0], [1272.0, 232.0], [1257.0, 238.0], [1256.0, 231.0], [1259.0, 235.0], [1258.0, 236.0], [1260.0, 239.0], [1263.0, 236.0], [1261.0, 238.0], [1262.0, 239.0], [1265.0, 236.0], [1223.0, 245.0], [1224.0, 241.0], [1226.0, 254.0], [1220.0, 247.0], [1221.0, 238.0], [1228.0, 239.0], [1229.0, 241.0], [1231.0, 244.0], [1266.0, 231.0], [1267.0, 236.0], [1271.0, 232.0], [1270.0, 238.0], [1269.0, 232.0], [1268.0, 237.5], [1218.0, 245.0], [1216.0, 247.0], [1246.0, 237.0], [1245.0, 239.0], [1247.0, 243.0], [1217.0, 250.0], [1254.0, 236.0], [1244.0, 241.0], [1242.0, 239.0], [1243.0, 239.0], [1241.0, 237.0], [1240.0, 238.0], [1239.0, 244.0], [1234.0, 239.0], [1233.0, 238.0], [1232.0, 239.0], [1235.0, 241.0], [1238.0, 245.0], [1236.0, 242.0], [1237.0, 239.0], [1249.0, 236.0], [1248.0, 242.0], [1279.0, 232.0], [1278.0, 235.0], [1276.0, 237.0], [1275.0, 233.0], [1274.0, 231.0], [1273.0, 232.0], [1250.0, 240.0], [1253.0, 240.0], [1252.0, 238.0], [1251.0, 240.0], [1294.0, 227.0], [1338.0, 226.0], [1324.0, 230.0], [1325.0, 222.0], [1327.0, 226.0], [1326.0, 215.0], [1321.0, 228.0], [1318.0, 229.0], [1316.0, 223.0], [1314.0, 228.0], [1315.0, 229.0], [1322.0, 226.0], [1286.0, 236.0], [1312.0, 231.0], [1295.0, 231.0], [1328.0, 221.0], [1330.0, 241.0], [1329.0, 224.0], [1331.0, 223.0], [1334.0, 223.0], [1332.0, 230.0], [1333.0, 225.0], [1336.0, 222.0], [1337.0, 223.0], [1280.0, 236.0], [1310.0, 228.0], [1305.0, 234.0], [1306.0, 233.0], [1307.0, 233.0], [1309.0, 224.0], [1311.0, 228.0], [1285.0, 232.0], [1284.0, 232.0], [1281.0, 238.0], [1282.0, 233.0], [1283.0, 236.0], [1302.0, 228.0], [1301.0, 221.0], [1303.0, 231.0], [1299.0, 244.0], [1298.0, 233.0], [1297.0, 234.0], [1296.0, 226.0], [1300.0, 231.0], [1304.0, 230.0], [1343.0, 219.0], [1342.0, 221.0], [1341.0, 218.0], [1340.0, 221.0], [1339.0, 224.0], [1293.0, 227.0], [1292.0, 227.0], [1291.0, 234.0], [1287.0, 227.0], [1288.0, 232.0], [1289.0, 241.0], [1290.0, 233.0], [1353.0, 222.0], [1391.0, 215.0], [1388.0, 214.0], [1389.0, 215.0], [1387.0, 215.0], [1380.0, 217.0], [1385.0, 216.0], [1379.0, 215.0], [1377.0, 216.0], [1407.0, 213.0], [1405.0, 221.0], [1400.0, 214.0], [1395.0, 211.0], [1396.0, 217.0], [1364.0, 220.0], [1348.0, 223.0], [1350.0, 222.0], [1352.0, 222.0], [1363.0, 222.0], [1360.0, 220.0], [1361.0, 215.0], [1362.0, 219.0], [1393.0, 214.0], [1347.0, 219.0], [1346.0, 222.5], [1375.0, 219.0], [1344.0, 221.0], [1345.0, 220.0], [1374.0, 217.0], [1372.0, 217.0], [1371.0, 219.0], [1373.0, 217.0], [1369.0, 217.0], [1366.0, 216.0], [1368.0, 220.0], [1367.0, 216.0], [1358.0, 222.0], [1392.0, 213.0], [1359.0, 222.0], [1355.0, 216.0], [1354.0, 224.0], [1356.0, 217.0], [1462.0, 203.0], [1415.0, 211.0], [1429.0, 211.0], [1420.0, 208.0], [1419.0, 212.0], [1418.0, 213.0], [1417.0, 211.0], [1423.0, 210.0], [1422.0, 209.0], [1421.0, 211.0], [1451.0, 205.0], [1453.0, 205.0], [1454.0, 205.0], [1452.0, 205.0], [1463.0, 203.0], [1464.0, 208.0], [1446.0, 205.0], [1466.0, 199.0], [1468.0, 205.0], [1441.0, 211.0], [1444.0, 205.0], [1448.0, 205.0], [1436.0, 206.0], [1434.0, 207.0], [1430.0, 207.0], [1433.0, 209.0], [1410.0, 215.0], [1408.0, 210.0], [1411.0, 215.0], [1438.0, 212.0], [1426.0, 209.5], [1424.0, 209.0], [1473.0, 208.0], [1497.0, 197.0], [1482.0, 197.0], [1582.0, 187.0], [1556.0, 197.0], [1584.0, 188.0], [1542.0, 196.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1584.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 61.0, "minX": 11.0, "maxY": 318.0, "series": [{"data": [[11.0, 61.0], [173.0, 231.0], [927.0, 318.0], [958.0, 258.0], [982.0, 258.0], [1008.0, 244.0], [1019.0, 292.0], [1059.0, 261.0], [1086.0, 273.0], [1058.0, 277.0], [1068.0, 266.0], [1061.0, 281.0], [1065.0, 272.0], [1060.0, 271.0], [1069.0, 268.0], [1051.0, 295.0], [1070.0, 270.0], [1046.0, 286.0], [1040.0, 228.0], [1076.0, 269.0], [1074.0, 276.0], [1055.0, 278.0], [1138.0, 267.0], [1147.0, 268.0], [1151.0, 255.0], [1120.0, 265.0], [1125.0, 270.0], [1126.0, 252.0], [1121.0, 263.0], [1095.0, 269.0], [1145.0, 256.0], [1139.0, 268.0], [1141.0, 263.0], [1142.0, 262.0], [1143.0, 257.0], [1101.0, 272.0], [1136.0, 263.0], [1137.0, 260.0], [1102.0, 269.0], [1146.0, 254.0], [1105.0, 263.0], [1109.0, 272.0], [1107.0, 270.0], [1106.0, 260.0], [1148.0, 255.0], [1149.0, 261.0], [1150.0, 260.0], [1092.0, 267.0], [1089.0, 282.0], [1093.0, 268.0], [1115.0, 270.0], [1127.0, 257.0], [1129.0, 262.0], [1128.0, 268.0], [1130.0, 264.0], [1133.0, 255.0], [1135.0, 266.0], [1134.0, 271.0], [1131.0, 259.0], [1203.0, 249.0], [1157.0, 262.0], [1183.0, 255.0], [1214.0, 242.0], [1208.0, 245.0], [1211.0, 248.0], [1209.0, 247.0], [1213.0, 249.0], [1212.0, 242.0], [1207.0, 250.0], [1206.0, 257.0], [1204.0, 249.5], [1205.0, 249.0], [1193.0, 253.0], [1190.0, 244.0], [1191.0, 255.0], [1192.0, 254.0], [1194.0, 246.0], [1195.0, 251.0], [1197.0, 248.0], [1198.0, 247.0], [1199.0, 244.0], [1188.0, 247.0], [1186.0, 241.0], [1184.0, 248.0], [1185.0, 263.0], [1215.0, 242.0], [1187.0, 249.0], [1156.0, 256.0], [1154.0, 261.0], [1152.0, 259.0], [1155.0, 252.0], [1158.0, 253.0], [1159.0, 262.0], [1161.0, 267.0], [1160.0, 253.0], [1162.0, 256.0], [1163.0, 263.0], [1164.0, 255.0], [1165.0, 261.0], [1166.0, 260.0], [1202.0, 250.0], [1200.0, 244.0], [1182.0, 242.0], [1170.0, 259.0], [1169.0, 244.0], [1168.0, 263.0], [1177.0, 245.0], [1178.0, 258.0], [1179.0, 250.0], [1180.0, 252.0], [1176.0, 259.0], [1173.0, 253.0], [1172.0, 256.0], [1174.0, 253.0], [1181.0, 259.0], [1219.0, 245.0], [1272.0, 232.0], [1257.0, 238.0], [1256.0, 231.0], [1259.0, 235.0], [1258.0, 236.0], [1260.0, 239.0], [1263.0, 236.0], [1261.0, 238.0], [1262.0, 239.0], [1265.0, 236.0], [1223.0, 245.0], [1224.0, 241.0], [1226.0, 254.0], [1220.0, 247.0], [1221.0, 238.0], [1228.0, 239.0], [1229.0, 241.0], [1231.0, 244.0], [1266.0, 231.0], [1267.0, 236.0], [1271.0, 232.0], [1270.0, 238.0], [1269.0, 232.0], [1268.0, 237.0], [1218.0, 245.0], [1216.0, 247.0], [1246.0, 237.0], [1245.0, 239.0], [1247.0, 243.0], [1217.0, 250.0], [1254.0, 236.0], [1244.0, 241.0], [1242.0, 239.0], [1243.0, 238.0], [1241.0, 237.0], [1240.0, 238.0], [1239.0, 244.0], [1234.0, 239.0], [1233.0, 238.0], [1232.0, 239.0], [1235.0, 241.0], [1238.0, 245.0], [1236.0, 242.0], [1237.0, 239.0], [1249.0, 236.0], [1248.0, 242.0], [1279.0, 232.0], [1278.0, 235.0], [1276.0, 237.0], [1275.0, 233.0], [1274.0, 231.0], [1273.0, 232.0], [1250.0, 240.0], [1253.0, 240.0], [1252.0, 238.0], [1251.0, 240.0], [1294.0, 227.0], [1338.0, 226.0], [1324.0, 230.0], [1325.0, 222.0], [1327.0, 226.0], [1326.0, 215.0], [1321.0, 228.0], [1318.0, 229.0], [1316.0, 223.0], [1314.0, 228.0], [1315.0, 229.0], [1322.0, 226.0], [1286.0, 236.0], [1312.0, 231.0], [1295.0, 231.0], [1328.0, 221.0], [1330.0, 241.0], [1329.0, 224.0], [1331.0, 223.0], [1334.0, 223.0], [1332.0, 230.0], [1333.0, 225.0], [1336.0, 222.0], [1337.0, 223.0], [1280.0, 236.0], [1310.0, 228.0], [1305.0, 234.0], [1306.0, 233.0], [1307.0, 233.0], [1309.0, 224.0], [1311.0, 228.0], [1285.0, 232.0], [1284.0, 232.0], [1281.0, 238.0], [1282.0, 233.0], [1283.0, 236.0], [1302.0, 228.0], [1301.0, 221.0], [1303.0, 231.0], [1299.0, 244.0], [1298.0, 233.0], [1297.0, 234.0], [1296.0, 226.0], [1300.0, 231.0], [1304.0, 230.0], [1343.0, 219.0], [1342.0, 221.0], [1341.0, 218.0], [1340.0, 221.0], [1339.0, 224.0], [1293.0, 227.0], [1292.0, 227.0], [1291.0, 234.0], [1287.0, 227.0], [1288.0, 232.0], [1289.0, 241.0], [1290.0, 233.0], [1353.0, 222.0], [1391.0, 215.0], [1388.0, 214.0], [1389.0, 215.0], [1387.0, 215.0], [1380.0, 217.0], [1385.0, 216.0], [1379.0, 215.0], [1377.0, 216.0], [1407.0, 213.0], [1405.0, 221.0], [1400.0, 214.0], [1395.0, 211.0], [1396.0, 217.0], [1364.0, 220.0], [1348.0, 223.0], [1350.0, 222.0], [1352.0, 222.0], [1363.0, 222.0], [1360.0, 220.0], [1361.0, 215.0], [1362.0, 219.0], [1393.0, 214.0], [1347.0, 219.0], [1346.0, 222.0], [1375.0, 219.0], [1344.0, 221.0], [1345.0, 220.0], [1374.0, 217.0], [1372.0, 217.0], [1371.0, 219.0], [1373.0, 217.0], [1369.0, 217.0], [1366.0, 216.0], [1368.0, 220.0], [1367.0, 216.0], [1358.0, 222.0], [1392.0, 213.0], [1359.0, 222.0], [1355.0, 215.0], [1354.0, 224.0], [1356.0, 217.0], [1462.0, 203.0], [1415.0, 211.0], [1429.0, 211.0], [1420.0, 208.0], [1419.0, 212.0], [1418.0, 213.0], [1417.0, 211.0], [1423.0, 210.0], [1422.0, 209.0], [1421.0, 211.0], [1451.0, 205.0], [1453.0, 205.0], [1454.0, 205.0], [1452.0, 205.0], [1463.0, 203.0], [1464.0, 208.0], [1446.0, 205.0], [1466.0, 199.0], [1468.0, 205.0], [1441.0, 210.0], [1444.0, 205.0], [1448.0, 205.0], [1436.0, 206.0], [1434.0, 207.0], [1430.0, 207.0], [1433.0, 209.0], [1410.0, 215.0], [1408.0, 210.0], [1411.0, 215.0], [1438.0, 212.0], [1426.0, 209.5], [1424.0, 209.0], [1473.0, 208.0], [1497.0, 197.0], [1482.0, 197.0], [1582.0, 187.0], [1556.0, 197.0], [1584.0, 188.0], [1542.0, 196.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1584.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 537.1, "minX": 1.62028284E12, "maxY": 1294.6166666666666, "series": [{"data": [[1.6202832E12, 1242.1666666666667], [1.6202829E12, 1237.7833333333333], [1.62028338E12, 1248.5666666666666], [1.62028308E12, 1263.5], [1.62028326E12, 1294.6166666666666], [1.62028296E12, 1287.3], [1.62028344E12, 750.7666666666667], [1.62028314E12, 1232.6166666666666], [1.62028284E12, 537.1], [1.62028332E12, 1281.8833333333334], [1.62028302E12, 1261.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62028344E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 532.1, "minX": 1.62028284E12, "maxY": 1294.6166666666666, "series": [{"data": [[1.6202832E12, 1242.1666666666667], [1.6202829E12, 1237.7833333333333], [1.62028338E12, 1248.5833333333333], [1.62028308E12, 1263.5], [1.62028326E12, 1294.6166666666666], [1.62028296E12, 1287.3], [1.62028344E12, 755.75], [1.62028314E12, 1232.6166666666666], [1.62028284E12, 532.1], [1.62028332E12, 1281.8833333333334], [1.62028302E12, 1261.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62028344E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 532.1, "minX": 1.62028284E12, "maxY": 1294.6166666666666, "series": [{"data": [[1.6202832E12, 1242.1666666666667], [1.6202829E12, 1237.7833333333333], [1.62028338E12, 1248.5833333333333], [1.62028308E12, 1263.5], [1.62028326E12, 1294.6166666666666], [1.62028296E12, 1287.3], [1.62028344E12, 755.75], [1.62028314E12, 1232.6166666666666], [1.62028284E12, 532.1], [1.62028332E12, 1281.8833333333334], [1.62028302E12, 1261.25]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62028344E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 532.1, "minX": 1.62028284E12, "maxY": 1294.6166666666666, "series": [{"data": [[1.6202832E12, 1242.1666666666667], [1.6202829E12, 1237.7833333333333], [1.62028338E12, 1248.5833333333333], [1.62028308E12, 1263.5], [1.62028326E12, 1294.6166666666666], [1.62028296E12, 1287.3], [1.62028344E12, 755.75], [1.62028314E12, 1232.6166666666666], [1.62028284E12, 532.1], [1.62028332E12, 1281.8833333333334], [1.62028302E12, 1261.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62028344E12, "title": "Total Transactions Per Second"}},
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

