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
        data: {"result": {"minY": 108.0, "minX": 0.0, "maxY": 1303.0, "series": [{"data": [[0.0, 108.0], [0.1, 159.0], [0.2, 165.0], [0.3, 168.0], [0.4, 170.0], [0.5, 172.0], [0.6, 173.0], [0.7, 174.0], [0.8, 175.0], [0.9, 176.0], [1.0, 177.0], [1.1, 177.0], [1.2, 178.0], [1.3, 179.0], [1.4, 179.0], [1.5, 180.0], [1.6, 180.0], [1.7, 181.0], [1.8, 181.0], [1.9, 182.0], [2.0, 182.0], [2.1, 182.0], [2.2, 183.0], [2.3, 183.0], [2.4, 183.0], [2.5, 184.0], [2.6, 184.0], [2.7, 184.0], [2.8, 185.0], [2.9, 185.0], [3.0, 185.0], [3.1, 186.0], [3.2, 186.0], [3.3, 186.0], [3.4, 186.0], [3.5, 187.0], [3.6, 187.0], [3.7, 187.0], [3.8, 187.0], [3.9, 188.0], [4.0, 188.0], [4.1, 188.0], [4.2, 188.0], [4.3, 188.0], [4.4, 189.0], [4.5, 189.0], [4.6, 189.0], [4.7, 189.0], [4.8, 190.0], [4.9, 190.0], [5.0, 190.0], [5.1, 190.0], [5.2, 190.0], [5.3, 190.0], [5.4, 191.0], [5.5, 191.0], [5.6, 191.0], [5.7, 191.0], [5.8, 191.0], [5.9, 191.0], [6.0, 192.0], [6.1, 192.0], [6.2, 192.0], [6.3, 192.0], [6.4, 192.0], [6.5, 192.0], [6.6, 193.0], [6.7, 193.0], [6.8, 193.0], [6.9, 193.0], [7.0, 193.0], [7.1, 193.0], [7.2, 193.0], [7.3, 193.0], [7.4, 194.0], [7.5, 194.0], [7.6, 194.0], [7.7, 194.0], [7.8, 194.0], [7.9, 194.0], [8.0, 194.0], [8.1, 194.0], [8.2, 195.0], [8.3, 195.0], [8.4, 195.0], [8.5, 195.0], [8.6, 195.0], [8.7, 195.0], [8.8, 195.0], [8.9, 195.0], [9.0, 196.0], [9.1, 196.0], [9.2, 196.0], [9.3, 196.0], [9.4, 196.0], [9.5, 196.0], [9.6, 196.0], [9.7, 196.0], [9.8, 196.0], [9.9, 197.0], [10.0, 197.0], [10.1, 197.0], [10.2, 197.0], [10.3, 197.0], [10.4, 197.0], [10.5, 197.0], [10.6, 197.0], [10.7, 197.0], [10.8, 198.0], [10.9, 198.0], [11.0, 198.0], [11.1, 198.0], [11.2, 198.0], [11.3, 198.0], [11.4, 198.0], [11.5, 198.0], [11.6, 198.0], [11.7, 198.0], [11.8, 198.0], [11.9, 199.0], [12.0, 199.0], [12.1, 199.0], [12.2, 199.0], [12.3, 199.0], [12.4, 199.0], [12.5, 199.0], [12.6, 199.0], [12.7, 199.0], [12.8, 199.0], [12.9, 200.0], [13.0, 200.0], [13.1, 200.0], [13.2, 200.0], [13.3, 200.0], [13.4, 200.0], [13.5, 200.0], [13.6, 200.0], [13.7, 200.0], [13.8, 200.0], [13.9, 200.0], [14.0, 200.0], [14.1, 201.0], [14.2, 201.0], [14.3, 201.0], [14.4, 201.0], [14.5, 201.0], [14.6, 201.0], [14.7, 201.0], [14.8, 201.0], [14.9, 201.0], [15.0, 201.0], [15.1, 201.0], [15.2, 201.0], [15.3, 202.0], [15.4, 202.0], [15.5, 202.0], [15.6, 202.0], [15.7, 202.0], [15.8, 202.0], [15.9, 202.0], [16.0, 202.0], [16.1, 202.0], [16.2, 202.0], [16.3, 202.0], [16.4, 202.0], [16.5, 203.0], [16.6, 203.0], [16.7, 203.0], [16.8, 203.0], [16.9, 203.0], [17.0, 203.0], [17.1, 203.0], [17.2, 203.0], [17.3, 203.0], [17.4, 203.0], [17.5, 203.0], [17.6, 203.0], [17.7, 203.0], [17.8, 203.0], [17.9, 204.0], [18.0, 204.0], [18.1, 204.0], [18.2, 204.0], [18.3, 204.0], [18.4, 204.0], [18.5, 204.0], [18.6, 204.0], [18.7, 204.0], [18.8, 204.0], [18.9, 204.0], [19.0, 204.0], [19.1, 204.0], [19.2, 204.0], [19.3, 205.0], [19.4, 205.0], [19.5, 205.0], [19.6, 205.0], [19.7, 205.0], [19.8, 205.0], [19.9, 205.0], [20.0, 205.0], [20.1, 205.0], [20.2, 205.0], [20.3, 205.0], [20.4, 205.0], [20.5, 205.0], [20.6, 205.0], [20.7, 206.0], [20.8, 206.0], [20.9, 206.0], [21.0, 206.0], [21.1, 206.0], [21.2, 206.0], [21.3, 206.0], [21.4, 206.0], [21.5, 206.0], [21.6, 206.0], [21.7, 206.0], [21.8, 206.0], [21.9, 206.0], [22.0, 206.0], [22.1, 206.0], [22.2, 207.0], [22.3, 207.0], [22.4, 207.0], [22.5, 207.0], [22.6, 207.0], [22.7, 207.0], [22.8, 207.0], [22.9, 207.0], [23.0, 207.0], [23.1, 207.0], [23.2, 207.0], [23.3, 207.0], [23.4, 207.0], [23.5, 207.0], [23.6, 207.0], [23.7, 207.0], [23.8, 208.0], [23.9, 208.0], [24.0, 208.0], [24.1, 208.0], [24.2, 208.0], [24.3, 208.0], [24.4, 208.0], [24.5, 208.0], [24.6, 208.0], [24.7, 208.0], [24.8, 208.0], [24.9, 208.0], [25.0, 208.0], [25.1, 208.0], [25.2, 208.0], [25.3, 208.0], [25.4, 209.0], [25.5, 209.0], [25.6, 209.0], [25.7, 209.0], [25.8, 209.0], [25.9, 209.0], [26.0, 209.0], [26.1, 209.0], [26.2, 209.0], [26.3, 209.0], [26.4, 209.0], [26.5, 209.0], [26.6, 209.0], [26.7, 209.0], [26.8, 209.0], [26.9, 209.0], [27.0, 210.0], [27.1, 210.0], [27.2, 210.0], [27.3, 210.0], [27.4, 210.0], [27.5, 210.0], [27.6, 210.0], [27.7, 210.0], [27.8, 210.0], [27.9, 210.0], [28.0, 210.0], [28.1, 210.0], [28.2, 210.0], [28.3, 210.0], [28.4, 210.0], [28.5, 210.0], [28.6, 210.0], [28.7, 211.0], [28.8, 211.0], [28.9, 211.0], [29.0, 211.0], [29.1, 211.0], [29.2, 211.0], [29.3, 211.0], [29.4, 211.0], [29.5, 211.0], [29.6, 211.0], [29.7, 211.0], [29.8, 211.0], [29.9, 211.0], [30.0, 211.0], [30.1, 211.0], [30.2, 211.0], [30.3, 211.0], [30.4, 212.0], [30.5, 212.0], [30.6, 212.0], [30.7, 212.0], [30.8, 212.0], [30.9, 212.0], [31.0, 212.0], [31.1, 212.0], [31.2, 212.0], [31.3, 212.0], [31.4, 212.0], [31.5, 212.0], [31.6, 212.0], [31.7, 212.0], [31.8, 212.0], [31.9, 212.0], [32.0, 212.0], [32.1, 212.0], [32.2, 213.0], [32.3, 213.0], [32.4, 213.0], [32.5, 213.0], [32.6, 213.0], [32.7, 213.0], [32.8, 213.0], [32.9, 213.0], [33.0, 213.0], [33.1, 213.0], [33.2, 213.0], [33.3, 213.0], [33.4, 213.0], [33.5, 213.0], [33.6, 213.0], [33.7, 213.0], [33.8, 213.0], [33.9, 213.0], [34.0, 214.0], [34.1, 214.0], [34.2, 214.0], [34.3, 214.0], [34.4, 214.0], [34.5, 214.0], [34.6, 214.0], [34.7, 214.0], [34.8, 214.0], [34.9, 214.0], [35.0, 214.0], [35.1, 214.0], [35.2, 214.0], [35.3, 214.0], [35.4, 214.0], [35.5, 214.0], [35.6, 214.0], [35.7, 214.0], [35.8, 215.0], [35.9, 215.0], [36.0, 215.0], [36.1, 215.0], [36.2, 215.0], [36.3, 215.0], [36.4, 215.0], [36.5, 215.0], [36.6, 215.0], [36.7, 215.0], [36.8, 215.0], [36.9, 215.0], [37.0, 215.0], [37.1, 215.0], [37.2, 215.0], [37.3, 215.0], [37.4, 215.0], [37.5, 215.0], [37.6, 215.0], [37.7, 216.0], [37.8, 216.0], [37.9, 216.0], [38.0, 216.0], [38.1, 216.0], [38.2, 216.0], [38.3, 216.0], [38.4, 216.0], [38.5, 216.0], [38.6, 216.0], [38.7, 216.0], [38.8, 216.0], [38.9, 216.0], [39.0, 216.0], [39.1, 216.0], [39.2, 216.0], [39.3, 216.0], [39.4, 216.0], [39.5, 216.0], [39.6, 217.0], [39.7, 217.0], [39.8, 217.0], [39.9, 217.0], [40.0, 217.0], [40.1, 217.0], [40.2, 217.0], [40.3, 217.0], [40.4, 217.0], [40.5, 217.0], [40.6, 217.0], [40.7, 217.0], [40.8, 217.0], [40.9, 217.0], [41.0, 217.0], [41.1, 217.0], [41.2, 217.0], [41.3, 217.0], [41.4, 217.0], [41.5, 218.0], [41.6, 218.0], [41.7, 218.0], [41.8, 218.0], [41.9, 218.0], [42.0, 218.0], [42.1, 218.0], [42.2, 218.0], [42.3, 218.0], [42.4, 218.0], [42.5, 218.0], [42.6, 218.0], [42.7, 218.0], [42.8, 218.0], [42.9, 218.0], [43.0, 218.0], [43.1, 218.0], [43.2, 218.0], [43.3, 218.0], [43.4, 219.0], [43.5, 219.0], [43.6, 219.0], [43.7, 219.0], [43.8, 219.0], [43.9, 219.0], [44.0, 219.0], [44.1, 219.0], [44.2, 219.0], [44.3, 219.0], [44.4, 219.0], [44.5, 219.0], [44.6, 219.0], [44.7, 219.0], [44.8, 219.0], [44.9, 219.0], [45.0, 219.0], [45.1, 219.0], [45.2, 219.0], [45.3, 220.0], [45.4, 220.0], [45.5, 220.0], [45.6, 220.0], [45.7, 220.0], [45.8, 220.0], [45.9, 220.0], [46.0, 220.0], [46.1, 220.0], [46.2, 220.0], [46.3, 220.0], [46.4, 220.0], [46.5, 220.0], [46.6, 220.0], [46.7, 220.0], [46.8, 220.0], [46.9, 220.0], [47.0, 220.0], [47.1, 220.0], [47.2, 221.0], [47.3, 221.0], [47.4, 221.0], [47.5, 221.0], [47.6, 221.0], [47.7, 221.0], [47.8, 221.0], [47.9, 221.0], [48.0, 221.0], [48.1, 221.0], [48.2, 221.0], [48.3, 221.0], [48.4, 221.0], [48.5, 221.0], [48.6, 221.0], [48.7, 221.0], [48.8, 221.0], [48.9, 221.0], [49.0, 221.0], [49.1, 222.0], [49.2, 222.0], [49.3, 222.0], [49.4, 222.0], [49.5, 222.0], [49.6, 222.0], [49.7, 222.0], [49.8, 222.0], [49.9, 222.0], [50.0, 222.0], [50.1, 222.0], [50.2, 222.0], [50.3, 222.0], [50.4, 222.0], [50.5, 222.0], [50.6, 222.0], [50.7, 222.0], [50.8, 222.0], [50.9, 222.0], [51.0, 223.0], [51.1, 223.0], [51.2, 223.0], [51.3, 223.0], [51.4, 223.0], [51.5, 223.0], [51.6, 223.0], [51.7, 223.0], [51.8, 223.0], [51.9, 223.0], [52.0, 223.0], [52.1, 223.0], [52.2, 223.0], [52.3, 223.0], [52.4, 223.0], [52.5, 223.0], [52.6, 223.0], [52.7, 223.0], [52.8, 224.0], [52.9, 224.0], [53.0, 224.0], [53.1, 224.0], [53.2, 224.0], [53.3, 224.0], [53.4, 224.0], [53.5, 224.0], [53.6, 224.0], [53.7, 224.0], [53.8, 224.0], [53.9, 224.0], [54.0, 224.0], [54.1, 224.0], [54.2, 224.0], [54.3, 224.0], [54.4, 224.0], [54.5, 224.0], [54.6, 224.0], [54.7, 225.0], [54.8, 225.0], [54.9, 225.0], [55.0, 225.0], [55.1, 225.0], [55.2, 225.0], [55.3, 225.0], [55.4, 225.0], [55.5, 225.0], [55.6, 225.0], [55.7, 225.0], [55.8, 225.0], [55.9, 225.0], [56.0, 225.0], [56.1, 225.0], [56.2, 225.0], [56.3, 225.0], [56.4, 225.0], [56.5, 225.0], [56.6, 226.0], [56.7, 226.0], [56.8, 226.0], [56.9, 226.0], [57.0, 226.0], [57.1, 226.0], [57.2, 226.0], [57.3, 226.0], [57.4, 226.0], [57.5, 226.0], [57.6, 226.0], [57.7, 226.0], [57.8, 226.0], [57.9, 226.0], [58.0, 226.0], [58.1, 226.0], [58.2, 226.0], [58.3, 226.0], [58.4, 227.0], [58.5, 227.0], [58.6, 227.0], [58.7, 227.0], [58.8, 227.0], [58.9, 227.0], [59.0, 227.0], [59.1, 227.0], [59.2, 227.0], [59.3, 227.0], [59.4, 227.0], [59.5, 227.0], [59.6, 227.0], [59.7, 227.0], [59.8, 227.0], [59.9, 227.0], [60.0, 227.0], [60.1, 227.0], [60.2, 228.0], [60.3, 228.0], [60.4, 228.0], [60.5, 228.0], [60.6, 228.0], [60.7, 228.0], [60.8, 228.0], [60.9, 228.0], [61.0, 228.0], [61.1, 228.0], [61.2, 228.0], [61.3, 228.0], [61.4, 228.0], [61.5, 228.0], [61.6, 228.0], [61.7, 228.0], [61.8, 228.0], [61.9, 228.0], [62.0, 229.0], [62.1, 229.0], [62.2, 229.0], [62.3, 229.0], [62.4, 229.0], [62.5, 229.0], [62.6, 229.0], [62.7, 229.0], [62.8, 229.0], [62.9, 229.0], [63.0, 229.0], [63.1, 229.0], [63.2, 229.0], [63.3, 229.0], [63.4, 229.0], [63.5, 229.0], [63.6, 229.0], [63.7, 230.0], [63.8, 230.0], [63.9, 230.0], [64.0, 230.0], [64.1, 230.0], [64.2, 230.0], [64.3, 230.0], [64.4, 230.0], [64.5, 230.0], [64.6, 230.0], [64.7, 230.0], [64.8, 230.0], [64.9, 230.0], [65.0, 230.0], [65.1, 230.0], [65.2, 230.0], [65.3, 230.0], [65.4, 231.0], [65.5, 231.0], [65.6, 231.0], [65.7, 231.0], [65.8, 231.0], [65.9, 231.0], [66.0, 231.0], [66.1, 231.0], [66.2, 231.0], [66.3, 231.0], [66.4, 231.0], [66.5, 231.0], [66.6, 231.0], [66.7, 231.0], [66.8, 231.0], [66.9, 231.0], [67.0, 232.0], [67.1, 232.0], [67.2, 232.0], [67.3, 232.0], [67.4, 232.0], [67.5, 232.0], [67.6, 232.0], [67.7, 232.0], [67.8, 232.0], [67.9, 232.0], [68.0, 232.0], [68.1, 232.0], [68.2, 232.0], [68.3, 232.0], [68.4, 232.0], [68.5, 232.0], [68.6, 233.0], [68.7, 233.0], [68.8, 233.0], [68.9, 233.0], [69.0, 233.0], [69.1, 233.0], [69.2, 233.0], [69.3, 233.0], [69.4, 233.0], [69.5, 233.0], [69.6, 233.0], [69.7, 233.0], [69.8, 233.0], [69.9, 233.0], [70.0, 233.0], [70.1, 234.0], [70.2, 234.0], [70.3, 234.0], [70.4, 234.0], [70.5, 234.0], [70.6, 234.0], [70.7, 234.0], [70.8, 234.0], [70.9, 234.0], [71.0, 234.0], [71.1, 234.0], [71.2, 234.0], [71.3, 234.0], [71.4, 234.0], [71.5, 234.0], [71.6, 234.0], [71.7, 235.0], [71.8, 235.0], [71.9, 235.0], [72.0, 235.0], [72.1, 235.0], [72.2, 235.0], [72.3, 235.0], [72.4, 235.0], [72.5, 235.0], [72.6, 235.0], [72.7, 235.0], [72.8, 235.0], [72.9, 235.0], [73.0, 235.0], [73.1, 236.0], [73.2, 236.0], [73.3, 236.0], [73.4, 236.0], [73.5, 236.0], [73.6, 236.0], [73.7, 236.0], [73.8, 236.0], [73.9, 236.0], [74.0, 236.0], [74.1, 236.0], [74.2, 236.0], [74.3, 236.0], [74.4, 236.0], [74.5, 236.0], [74.6, 237.0], [74.7, 237.0], [74.8, 237.0], [74.9, 237.0], [75.0, 237.0], [75.1, 237.0], [75.2, 237.0], [75.3, 237.0], [75.4, 237.0], [75.5, 237.0], [75.6, 237.0], [75.7, 237.0], [75.8, 237.0], [75.9, 237.0], [76.0, 238.0], [76.1, 238.0], [76.2, 238.0], [76.3, 238.0], [76.4, 238.0], [76.5, 238.0], [76.6, 238.0], [76.7, 238.0], [76.8, 238.0], [76.9, 238.0], [77.0, 238.0], [77.1, 238.0], [77.2, 238.0], [77.3, 239.0], [77.4, 239.0], [77.5, 239.0], [77.6, 239.0], [77.7, 239.0], [77.8, 239.0], [77.9, 239.0], [78.0, 239.0], [78.1, 239.0], [78.2, 239.0], [78.3, 239.0], [78.4, 239.0], [78.5, 239.0], [78.6, 240.0], [78.7, 240.0], [78.8, 240.0], [78.9, 240.0], [79.0, 240.0], [79.1, 240.0], [79.2, 240.0], [79.3, 240.0], [79.4, 240.0], [79.5, 240.0], [79.6, 240.0], [79.7, 240.0], [79.8, 241.0], [79.9, 241.0], [80.0, 241.0], [80.1, 241.0], [80.2, 241.0], [80.3, 241.0], [80.4, 241.0], [80.5, 241.0], [80.6, 241.0], [80.7, 241.0], [80.8, 241.0], [80.9, 241.0], [81.0, 242.0], [81.1, 242.0], [81.2, 242.0], [81.3, 242.0], [81.4, 242.0], [81.5, 242.0], [81.6, 242.0], [81.7, 242.0], [81.8, 242.0], [81.9, 242.0], [82.0, 242.0], [82.1, 243.0], [82.2, 243.0], [82.3, 243.0], [82.4, 243.0], [82.5, 243.0], [82.6, 243.0], [82.7, 243.0], [82.8, 243.0], [82.9, 243.0], [83.0, 243.0], [83.1, 243.0], [83.2, 244.0], [83.3, 244.0], [83.4, 244.0], [83.5, 244.0], [83.6, 244.0], [83.7, 244.0], [83.8, 244.0], [83.9, 244.0], [84.0, 244.0], [84.1, 244.0], [84.2, 245.0], [84.3, 245.0], [84.4, 245.0], [84.5, 245.0], [84.6, 245.0], [84.7, 245.0], [84.8, 245.0], [84.9, 245.0], [85.0, 245.0], [85.1, 245.0], [85.2, 246.0], [85.3, 246.0], [85.4, 246.0], [85.5, 246.0], [85.6, 246.0], [85.7, 246.0], [85.8, 246.0], [85.9, 246.0], [86.0, 246.0], [86.1, 247.0], [86.2, 247.0], [86.3, 247.0], [86.4, 247.0], [86.5, 247.0], [86.6, 247.0], [86.7, 247.0], [86.8, 247.0], [86.9, 247.0], [87.0, 248.0], [87.1, 248.0], [87.2, 248.0], [87.3, 248.0], [87.4, 248.0], [87.5, 248.0], [87.6, 248.0], [87.7, 248.0], [87.8, 248.0], [87.9, 249.0], [88.0, 249.0], [88.1, 249.0], [88.2, 249.0], [88.3, 249.0], [88.4, 249.0], [88.5, 249.0], [88.6, 249.0], [88.7, 250.0], [88.8, 250.0], [88.9, 250.0], [89.0, 250.0], [89.1, 250.0], [89.2, 250.0], [89.3, 250.0], [89.4, 250.0], [89.5, 251.0], [89.6, 251.0], [89.7, 251.0], [89.8, 251.0], [89.9, 251.0], [90.0, 251.0], [90.1, 251.0], [90.2, 252.0], [90.3, 252.0], [90.4, 252.0], [90.5, 252.0], [90.6, 252.0], [90.7, 252.0], [90.8, 252.0], [90.9, 253.0], [91.0, 253.0], [91.1, 253.0], [91.2, 253.0], [91.3, 253.0], [91.4, 253.0], [91.5, 254.0], [91.6, 254.0], [91.7, 254.0], [91.8, 254.0], [91.9, 254.0], [92.0, 254.0], [92.1, 255.0], [92.2, 255.0], [92.3, 255.0], [92.4, 255.0], [92.5, 255.0], [92.6, 256.0], [92.7, 256.0], [92.8, 256.0], [92.9, 256.0], [93.0, 256.0], [93.1, 257.0], [93.2, 257.0], [93.3, 257.0], [93.4, 257.0], [93.5, 257.0], [93.6, 258.0], [93.7, 258.0], [93.8, 258.0], [93.9, 258.0], [94.0, 258.0], [94.1, 259.0], [94.2, 259.0], [94.3, 259.0], [94.4, 259.0], [94.5, 260.0], [94.6, 260.0], [94.7, 260.0], [94.8, 260.0], [94.9, 261.0], [95.0, 261.0], [95.1, 261.0], [95.2, 261.0], [95.3, 262.0], [95.4, 262.0], [95.5, 262.0], [95.6, 262.0], [95.7, 263.0], [95.8, 263.0], [95.9, 263.0], [96.0, 264.0], [96.1, 264.0], [96.2, 264.0], [96.3, 265.0], [96.4, 265.0], [96.5, 265.0], [96.6, 266.0], [96.7, 266.0], [96.8, 267.0], [96.9, 267.0], [97.0, 267.0], [97.1, 268.0], [97.2, 268.0], [97.3, 269.0], [97.4, 269.0], [97.5, 270.0], [97.6, 270.0], [97.7, 271.0], [97.8, 271.0], [97.9, 272.0], [98.0, 273.0], [98.1, 273.0], [98.2, 274.0], [98.3, 275.0], [98.4, 276.0], [98.5, 276.0], [98.6, 277.0], [98.7, 278.0], [98.8, 279.0], [98.9, 281.0], [99.0, 282.0], [99.1, 284.0], [99.2, 285.0], [99.3, 287.0], [99.4, 289.0], [99.5, 292.0], [99.6, 295.0], [99.7, 299.0], [99.8, 306.0], [99.9, 323.0], [100.0, 1303.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 699391.0, "series": [{"data": [[300.0, 2294.0], [1200.0, 23.0], [1300.0, 1.0], [100.0, 103753.0], [200.0, 699391.0], [400.0, 34.0], [800.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 26.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 805472.0, "series": [{"data": [[0.0, 805472.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 26.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 298.7257010531692, "minX": 1.62029664E12, "maxY": 300.0, "series": [{"data": [[1.620297E12, 300.0], [1.6202967E12, 300.0], [1.62029718E12, 300.0], [1.62029664E12, 298.7257010531692], [1.62029712E12, 300.0], [1.62029682E12, 300.0], [1.62029676E12, 300.0], [1.62029724E12, 299.082528214774], [1.62029694E12, 300.0], [1.62029688E12, 300.0], [1.62029706E12, 300.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62029724E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 123.0, "minX": 1.0, "maxY": 321.6, "series": [{"data": [[2.0, 123.0], [4.0, 124.0], [6.0, 123.5], [9.0, 123.66666666666667], [11.0, 123.0], [12.0, 123.5], [14.0, 124.0], [15.0, 124.0], [18.0, 124.0], [19.0, 125.0], [24.0, 126.0], [25.0, 126.0], [28.0, 126.0], [39.0, 126.0], [43.0, 208.0], [42.0, 196.0], [44.0, 206.0], [57.0, 150.4], [59.0, 196.0], [58.0, 199.0], [61.0, 192.0], [63.0, 195.0], [67.0, 198.33333333333334], [75.0, 218.24242424242428], [79.0, 210.0], [78.0, 226.0], [82.0, 210.5], [80.0, 195.66666666666666], [87.0, 204.0], [86.0, 200.0], [84.0, 215.5], [91.0, 206.0], [90.0, 209.33333333333334], [95.0, 229.0], [92.0, 208.0], [99.0, 211.75], [97.0, 224.0], [96.0, 225.0], [101.0, 145.33333333333334], [103.0, 220.0], [102.0, 219.0], [104.0, 192.0], [107.0, 218.0], [106.0, 220.0], [105.0, 218.5], [108.0, 181.0], [109.0, 178.33333333333334], [111.0, 179.75], [110.0, 217.0], [112.0, 190.4], [113.0, 190.72727272727275], [114.0, 202.0], [115.0, 207.0], [116.0, 191.2], [117.0, 206.66666666666666], [118.0, 193.6], [119.0, 210.0], [121.0, 214.0], [122.0, 215.16666666666666], [123.0, 220.5], [124.0, 210.6], [125.0, 225.25], [126.0, 218.6], [127.0, 209.0], [128.0, 220.14285714285714], [129.0, 172.0], [130.0, 197.0], [132.0, 207.66666666666666], [134.0, 209.33333333333334], [135.0, 166.5], [138.0, 174.0], [140.0, 175.0], [143.0, 182.0], [142.0, 218.0], [141.0, 235.0], [139.0, 220.0], [137.0, 219.0], [136.0, 220.5], [144.0, 199.16666666666666], [148.0, 180.0], [150.0, 192.5], [149.0, 225.5], [147.0, 214.0], [145.0, 212.0], [152.0, 189.8], [156.0, 182.0], [158.0, 206.0], [155.0, 211.0], [154.0, 209.5], [161.0, 198.0], [162.0, 178.75], [163.0, 180.22222222222223], [164.0, 190.5], [165.0, 191.0], [167.0, 213.0], [166.0, 213.0], [160.0, 218.5], [170.0, 205.25], [171.0, 181.5], [172.0, 197.75], [173.0, 189.75], [175.0, 200.5], [174.0, 208.0], [177.0, 201.5], [178.0, 198.33333333333334], [179.0, 197.0], [180.0, 192.0], [181.0, 198.5], [182.0, 201.55555555555557], [184.0, 198.0], [185.0, 206.75], [186.0, 206.33333333333334], [187.0, 205.5], [189.0, 208.66666666666666], [190.0, 206.0], [191.0, 203.99999999999997], [188.0, 206.0], [192.0, 204.5], [193.0, 203.0], [194.0, 208.5], [196.0, 211.5], [197.0, 216.0], [198.0, 210.16666666666669], [199.0, 202.0], [200.0, 210.0], [202.0, 202.71428571428572], [204.0, 206.4], [205.0, 217.0], [206.0, 208.0], [208.0, 190.0], [210.0, 197.0], [211.0, 195.0], [213.0, 199.33333333333334], [214.0, 193.0], [215.0, 202.0], [217.0, 196.5], [218.0, 197.0], [219.0, 203.25], [220.0, 183.0], [221.0, 200.75], [222.0, 189.5], [223.0, 178.0], [224.0, 191.0], [225.0, 190.0], [226.0, 166.5], [227.0, 185.66666666666666], [228.0, 178.6], [229.0, 169.0], [230.0, 209.0], [231.0, 269.75], [232.0, 318.0], [233.0, 234.5], [234.0, 248.33333333333331], [235.0, 235.66666666666666], [236.0, 237.0], [237.0, 227.5], [238.0, 217.5], [239.0, 179.0], [240.0, 227.5], [241.0, 206.5], [242.0, 198.5], [243.0, 197.0], [244.0, 185.0], [245.0, 212.0], [247.0, 203.5], [248.0, 209.33333333333334], [250.0, 209.25], [251.0, 212.5], [252.0, 220.14285714285717], [253.0, 222.0], [255.0, 248.33333333333334], [254.0, 201.0], [270.0, 244.0], [266.0, 229.0], [267.0, 234.33333333333334], [269.0, 226.83333333333331], [271.0, 278.0], [268.0, 214.4], [265.0, 205.66666666666666], [264.0, 206.0], [260.0, 225.5], [257.0, 275.25], [256.0, 203.66666666666666], [259.0, 240.39130434782606], [258.0, 256.0], [273.0, 232.0], [272.0, 227.66666666666666], [274.0, 233.42857142857142], [275.0, 237.63636363636363], [276.0, 228.25], [277.0, 274.1666666666667], [278.0, 321.6], [279.0, 278.5], [280.0, 216.75], [286.0, 230.75], [287.0, 239.54545454545456], [284.0, 242.4], [285.0, 230.33333333333334], [281.0, 237.33333333333334], [282.0, 224.66666666666666], [283.0, 227.0], [289.0, 234.88888888888889], [288.0, 262.0], [290.0, 214.125], [294.0, 226.2], [293.0, 202.8], [292.0, 196.66666666666666], [295.0, 212.8181818181818], [296.0, 241.63636363636365], [297.0, 233.0], [298.0, 222.2666666666667], [299.0, 214.07142857142858], [300.0, 223.34048864752128], [291.0, 197.66666666666666], [1.0, 127.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[299.89684145708594, 223.3305284432739]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 83013.2, "minX": 1.62029664E12, "maxY": 414798.6, "series": [{"data": [[1.620297E12, 414798.6], [1.6202967E12, 402753.2], [1.62029718E12, 410309.5333333333], [1.62029664E12, 159576.6], [1.62029712E12, 410360.2], [1.62029682E12, 411647.13333333336], [1.62029676E12, 406271.4], [1.62029724E12, 236893.93333333332], [1.62029694E12, 405506.3333333333], [1.62029688E12, 409598.26666666666], [1.62029706E12, 409704.6666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.620297E12, 215812.2], [1.6202967E12, 209476.4], [1.62029718E12, 213479.06666666668], [1.62029664E12, 83013.2], [1.62029712E12, 213505.4], [1.62029682E12, 214174.26666666666], [1.62029676E12, 211380.3], [1.62029724E12, 123197.86666666667], [1.62029694E12, 210982.66666666666], [1.62029688E12, 213034.03333333333], [1.62029706E12, 213089.33333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62029724E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 219.59070942236016, "minX": 1.62029664E12, "maxY": 238.9432813094791, "series": [{"data": [[1.620297E12, 219.59070942236016], [1.6202967E12, 226.15888520138685], [1.62029718E12, 222.0733705037753], [1.62029664E12, 238.9432813094791], [1.62029712E12, 221.94397987123529], [1.62029682E12, 221.22644223676062], [1.62029676E12, 224.2614642897179], [1.62029724E12, 222.08596956224412], [1.62029694E12, 224.59385921118366], [1.62029688E12, 222.51747240386243], [1.62029706E12, 222.3770637666855]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62029724E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 219.542816702052, "minX": 1.62029664E12, "maxY": 238.90239182844707, "series": [{"data": [[1.620297E12, 219.542816702052], [1.6202967E12, 226.11413234776512], [1.62029718E12, 222.0268293284678], [1.62029664E12, 238.90239182844707], [1.62029712E12, 221.8952613532638], [1.62029682E12, 221.1835439925261], [1.62029676E12, 224.22054041932918], [1.62029724E12, 222.04911935704544], [1.62029694E12, 224.5467299051432], [1.62029688E12, 222.47054969777182], [1.62029706E12, 222.32958477508785]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62029724E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.023106190150478767, "minX": 1.62029664E12, "maxY": 0.1707905088186773, "series": [{"data": [[1.620297E12, 0.05405471361983587], [1.6202967E12, 0.053326293558606595], [1.62029718E12, 0.07904475255341191], [1.62029664E12, 0.1707905088186773], [1.62029712E12, 0.07109203483065754], [1.62029682E12, 0.06993557271430695], [1.62029676E12, 0.10889362285258661], [1.62029724E12, 0.023106190150478767], [1.62029694E12, 0.09722915626560306], [1.62029688E12, 0.07987737796511661], [1.62029706E12, 0.04023727137913967]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62029724E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 108.0, "minX": 1.62029664E12, "maxY": 1303.0, "series": [{"data": [[1.620297E12, 1216.0], [1.6202967E12, 1278.0], [1.62029718E12, 1270.0], [1.62029664E12, 396.0], [1.62029712E12, 1262.0], [1.62029682E12, 1298.0], [1.62029676E12, 1274.0], [1.62029724E12, 405.0], [1.62029694E12, 1269.0], [1.62029688E12, 1303.0], [1.62029706E12, 1256.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.620297E12, 249.0], [1.6202967E12, 248.0], [1.62029718E12, 252.0], [1.62029664E12, 263.0], [1.62029712E12, 251.0], [1.62029682E12, 261.0], [1.62029676E12, 252.0], [1.62029724E12, 247.0], [1.62029694E12, 251.0], [1.62029688E12, 250.0], [1.62029706E12, 260.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.620297E12, 269.0], [1.6202967E12, 268.0], [1.62029718E12, 278.0], [1.62029664E12, 298.0], [1.62029712E12, 275.0], [1.62029682E12, 289.0], [1.62029676E12, 280.0], [1.62029724E12, 276.0], [1.62029694E12, 272.0], [1.62029688E12, 277.0], [1.62029706E12, 293.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.620297E12, 256.0], [1.6202967E12, 256.0], [1.62029718E12, 260.0], [1.62029664E12, 274.0], [1.62029712E12, 259.0], [1.62029682E12, 271.0], [1.62029676E12, 261.0], [1.62029724E12, 255.0], [1.62029694E12, 259.0], [1.62029688E12, 258.0], [1.62029706E12, 270.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.620297E12, 123.0], [1.6202967E12, 126.0], [1.62029718E12, 124.0], [1.62029664E12, 108.0], [1.62029712E12, 127.0], [1.62029682E12, 132.0], [1.62029676E12, 126.0], [1.62029724E12, 119.0], [1.62029694E12, 135.0], [1.62029688E12, 137.0], [1.62029706E12, 127.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.620297E12, 224.0], [1.6202967E12, 221.0], [1.62029718E12, 225.0], [1.62029664E12, 230.0], [1.62029712E12, 222.0], [1.62029682E12, 224.0], [1.62029676E12, 223.0], [1.62029724E12, 218.0], [1.62029694E12, 224.0], [1.62029688E12, 224.0], [1.62029706E12, 223.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62029724E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 193.0, "minX": 254.0, "maxY": 297.0, "series": [{"data": [[254.0, 196.0], [854.0, 229.5], [898.0, 297.0], [1063.0, 294.0], [1147.0, 257.0], [1187.0, 246.0], [1194.0, 251.0], [1199.0, 254.0], [1158.0, 254.0], [1168.0, 260.0], [1192.0, 235.0], [1206.0, 251.0], [1201.0, 249.0], [1200.0, 251.0], [1196.0, 250.0], [1211.0, 240.0], [1215.0, 246.0], [1272.0, 234.0], [1245.0, 241.0], [1221.0, 245.0], [1239.0, 240.0], [1231.0, 240.0], [1230.0, 239.0], [1227.0, 237.0], [1264.0, 236.0], [1268.0, 232.0], [1267.0, 235.0], [1271.0, 232.0], [1269.0, 233.0], [1236.0, 241.0], [1237.0, 247.0], [1235.0, 235.0], [1232.0, 238.0], [1276.0, 231.0], [1273.0, 235.0], [1274.0, 224.0], [1275.0, 233.0], [1259.0, 240.0], [1260.0, 243.0], [1258.0, 240.0], [1257.0, 238.0], [1278.0, 230.0], [1252.0, 225.0], [1251.0, 233.0], [1249.0, 231.0], [1248.0, 230.0], [1250.0, 232.0], [1253.0, 232.0], [1277.0, 236.0], [1261.0, 234.0], [1263.0, 238.0], [1262.0, 236.0], [1240.0, 239.0], [1246.0, 237.0], [1220.0, 249.0], [1218.0, 246.0], [1219.0, 247.0], [1217.0, 245.0], [1244.0, 236.0], [1242.0, 234.0], [1338.0, 227.0], [1322.0, 228.0], [1316.0, 226.0], [1343.0, 222.0], [1342.0, 222.0], [1341.0, 220.0], [1313.0, 229.0], [1315.0, 227.0], [1314.0, 227.0], [1312.0, 228.0], [1321.0, 226.0], [1317.0, 226.0], [1318.0, 226.0], [1319.0, 225.0], [1325.0, 231.0], [1326.0, 223.0], [1327.0, 226.0], [1324.0, 227.0], [1323.0, 230.0], [1287.0, 238.0], [1282.0, 229.0], [1286.0, 230.0], [1283.0, 226.0], [1285.0, 230.0], [1281.0, 235.0], [1280.0, 231.0], [1311.0, 229.0], [1336.0, 224.0], [1337.0, 223.0], [1334.0, 225.0], [1335.0, 230.0], [1333.0, 226.0], [1329.0, 225.0], [1332.0, 222.0], [1330.0, 223.0], [1331.0, 225.0], [1289.0, 229.0], [1288.0, 229.0], [1328.0, 227.0], [1290.0, 230.0], [1294.0, 225.0], [1291.0, 234.0], [1295.0, 226.0], [1306.0, 230.0], [1307.0, 228.0], [1308.0, 231.0], [1309.0, 226.0], [1305.0, 230.0], [1304.0, 232.0], [1300.0, 230.0], [1299.0, 230.0], [1296.0, 230.0], [1297.0, 229.0], [1298.0, 231.0], [1302.0, 224.0], [1301.0, 230.0], [1303.0, 231.0], [1340.0, 221.0], [1339.0, 221.0], [1310.0, 228.0], [1354.0, 222.0], [1379.0, 216.0], [1387.0, 217.0], [1382.0, 216.0], [1384.0, 216.0], [1385.0, 217.0], [1386.0, 215.0], [1383.0, 214.0], [1381.0, 215.0], [1380.0, 219.0], [1366.0, 219.0], [1364.0, 219.0], [1363.0, 218.0], [1365.0, 221.0], [1362.0, 220.0], [1361.0, 220.0], [1360.0, 218.0], [1347.0, 221.0], [1389.0, 216.0], [1388.0, 211.0], [1390.0, 215.0], [1391.0, 216.0], [1370.0, 219.0], [1371.0, 218.0], [1372.0, 209.0], [1367.0, 219.0], [1368.0, 220.0], [1369.0, 214.0], [1375.0, 217.0], [1345.0, 216.0], [1346.0, 219.0], [1344.0, 222.0], [1374.0, 218.0], [1373.0, 220.0], [1348.0, 226.0], [1349.0, 224.0], [1350.0, 219.0], [1351.0, 220.0], [1353.0, 215.0], [1352.0, 226.0], [1400.0, 214.0], [1399.0, 213.0], [1398.0, 216.0], [1397.0, 215.0], [1396.0, 216.0], [1394.0, 217.0], [1393.0, 216.0], [1395.0, 216.0], [1358.0, 219.0], [1357.0, 224.0], [1359.0, 217.0], [1355.0, 219.0], [1356.0, 219.0], [1392.0, 214.0], [1376.0, 219.0], [1378.0, 219.0], [1377.0, 216.0], [1407.0, 211.0], [1405.0, 213.0], [1406.0, 212.0], [1404.0, 213.0], [1401.0, 211.0], [1403.0, 213.0], [1457.0, 213.0], [1414.0, 211.0], [1444.0, 208.0], [1442.0, 208.0], [1450.0, 205.0], [1449.0, 204.0], [1455.0, 215.0], [1452.0, 209.0], [1454.0, 201.0], [1447.0, 208.0], [1435.0, 211.0], [1434.0, 211.0], [1436.0, 211.0], [1413.0, 208.0], [1409.0, 212.0], [1411.0, 216.0], [1412.0, 211.0], [1408.0, 214.0], [1421.0, 209.0], [1416.0, 207.0], [1415.0, 208.0], [1419.0, 210.0], [1420.0, 212.0], [1418.0, 211.0], [1417.0, 211.0], [1422.0, 212.0], [1423.0, 217.0], [1432.0, 208.0], [1427.0, 213.0], [1428.0, 206.0], [1431.0, 209.0], [1425.0, 208.0], [1441.0, 211.0], [1458.0, 202.0], [1459.0, 206.0], [1461.0, 205.0], [1465.0, 207.0], [1460.0, 207.0], [1467.0, 205.0], [1470.0, 209.0], [1468.0, 206.0], [1469.0, 199.0], [1477.0, 203.0], [1501.0, 207.0], [1517.0, 199.0], [1479.0, 201.0], [1500.0, 202.0], [1475.0, 208.0], [1515.0, 193.0], [1491.0, 211.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1517.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 193.0, "minX": 254.0, "maxY": 297.0, "series": [{"data": [[254.0, 196.0], [854.0, 229.5], [898.0, 297.0], [1063.0, 294.0], [1147.0, 257.0], [1187.0, 246.0], [1194.0, 251.0], [1199.0, 254.0], [1158.0, 254.0], [1168.0, 260.0], [1192.0, 235.0], [1206.0, 251.0], [1201.0, 249.0], [1200.0, 251.0], [1196.0, 250.0], [1211.0, 240.0], [1215.0, 246.0], [1272.0, 234.0], [1245.0, 241.0], [1221.0, 245.0], [1239.0, 240.0], [1231.0, 240.0], [1230.0, 239.0], [1227.0, 237.0], [1264.0, 236.0], [1268.0, 232.0], [1267.0, 235.0], [1271.0, 232.0], [1269.0, 233.0], [1236.0, 241.0], [1237.0, 247.0], [1235.0, 235.0], [1232.0, 238.0], [1276.0, 231.0], [1273.0, 235.0], [1274.0, 224.0], [1275.0, 233.0], [1259.0, 240.0], [1260.0, 243.0], [1258.0, 240.0], [1257.0, 238.0], [1278.0, 230.0], [1252.0, 225.0], [1251.0, 233.0], [1249.0, 231.0], [1248.0, 230.0], [1250.0, 231.0], [1253.0, 232.0], [1277.0, 236.0], [1261.0, 234.0], [1263.0, 238.0], [1262.0, 236.0], [1240.0, 239.0], [1246.0, 237.0], [1220.0, 249.0], [1218.0, 246.0], [1219.0, 247.0], [1217.0, 245.0], [1244.0, 236.0], [1242.0, 234.0], [1338.0, 226.0], [1322.0, 228.0], [1316.0, 226.0], [1343.0, 222.0], [1342.0, 222.0], [1341.0, 220.0], [1313.0, 229.0], [1315.0, 227.0], [1314.0, 227.0], [1312.0, 228.0], [1321.0, 226.0], [1317.0, 226.0], [1318.0, 226.0], [1319.0, 225.0], [1325.0, 231.0], [1326.0, 223.0], [1327.0, 226.0], [1324.0, 227.0], [1323.0, 230.0], [1287.0, 238.0], [1282.0, 229.0], [1286.0, 230.0], [1283.0, 226.0], [1285.0, 229.0], [1281.0, 235.0], [1280.0, 231.0], [1311.0, 229.0], [1336.0, 224.0], [1337.0, 223.0], [1334.0, 225.0], [1335.0, 230.0], [1333.0, 226.0], [1329.0, 225.0], [1332.0, 222.0], [1330.0, 223.0], [1331.0, 225.0], [1289.0, 229.0], [1288.0, 229.0], [1328.0, 227.0], [1290.0, 230.0], [1294.0, 225.0], [1291.0, 234.0], [1295.0, 226.0], [1306.0, 229.5], [1307.0, 228.0], [1308.0, 231.0], [1309.0, 226.0], [1305.0, 230.0], [1304.0, 232.0], [1300.0, 230.0], [1299.0, 230.0], [1296.0, 230.0], [1297.0, 229.0], [1298.0, 231.0], [1302.0, 224.0], [1301.0, 230.0], [1303.0, 231.0], [1340.0, 221.0], [1339.0, 221.0], [1310.0, 228.0], [1354.0, 222.0], [1379.0, 216.0], [1387.0, 217.0], [1382.0, 216.0], [1384.0, 216.0], [1385.0, 217.0], [1386.0, 215.0], [1383.0, 214.0], [1381.0, 215.0], [1380.0, 219.0], [1366.0, 219.0], [1364.0, 219.0], [1363.0, 218.0], [1365.0, 221.0], [1362.0, 220.0], [1361.0, 220.0], [1360.0, 218.0], [1347.0, 221.0], [1389.0, 216.0], [1388.0, 211.0], [1390.0, 215.0], [1391.0, 216.0], [1370.0, 219.0], [1371.0, 218.0], [1372.0, 209.0], [1367.0, 219.0], [1368.0, 220.0], [1369.0, 214.0], [1375.0, 217.0], [1345.0, 216.0], [1346.0, 219.0], [1344.0, 222.0], [1374.0, 218.0], [1373.0, 220.0], [1348.0, 226.0], [1349.0, 224.0], [1350.0, 219.0], [1351.0, 220.0], [1353.0, 215.0], [1352.0, 226.0], [1400.0, 214.0], [1399.0, 213.0], [1398.0, 216.0], [1397.0, 215.0], [1396.0, 216.0], [1394.0, 217.0], [1393.0, 216.0], [1395.0, 216.0], [1358.0, 219.0], [1357.0, 224.0], [1359.0, 217.0], [1355.0, 219.0], [1356.0, 219.0], [1392.0, 214.0], [1376.0, 219.0], [1378.0, 219.0], [1377.0, 216.0], [1407.0, 211.0], [1405.0, 213.0], [1406.0, 212.0], [1404.0, 213.0], [1401.0, 211.0], [1403.0, 213.0], [1457.0, 213.0], [1414.0, 211.0], [1444.0, 208.0], [1442.0, 208.0], [1450.0, 205.0], [1449.0, 204.0], [1455.0, 215.0], [1452.0, 209.0], [1454.0, 201.0], [1447.0, 208.0], [1435.0, 211.0], [1434.0, 211.0], [1436.0, 211.0], [1413.0, 208.0], [1409.0, 212.0], [1411.0, 216.0], [1412.0, 211.0], [1408.0, 214.0], [1421.0, 209.0], [1416.0, 207.0], [1415.0, 208.0], [1419.0, 209.0], [1420.0, 211.5], [1418.0, 211.0], [1417.0, 211.0], [1422.0, 212.0], [1423.0, 217.0], [1432.0, 208.0], [1427.0, 213.0], [1428.0, 206.0], [1431.0, 209.0], [1425.0, 208.0], [1441.0, 211.0], [1458.0, 202.0], [1459.0, 206.0], [1461.0, 205.0], [1465.0, 207.0], [1460.0, 207.0], [1467.0, 205.0], [1470.0, 209.0], [1468.0, 206.0], [1469.0, 199.0], [1477.0, 203.0], [1501.0, 207.0], [1517.0, 199.0], [1479.0, 201.0], [1500.0, 202.0], [1475.0, 208.0], [1515.0, 193.0], [1491.0, 211.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1517.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 530.4, "minX": 1.62029664E12, "maxY": 1365.9, "series": [{"data": [[1.620297E12, 1365.9], [1.6202967E12, 1325.7833333333333], [1.62029718E12, 1351.1666666666667], [1.62029664E12, 530.4], [1.62029712E12, 1351.2666666666667], [1.62029682E12, 1355.5333333333333], [1.62029676E12, 1337.8666666666666], [1.62029724E12, 774.7333333333333], [1.62029694E12, 1335.3333333333333], [1.62029688E12, 1348.3166666666666], [1.62029706E12, 1348.6666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62029724E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 525.4, "minX": 1.62029664E12, "maxY": 1365.9, "series": [{"data": [[1.620297E12, 1365.9], [1.6202967E12, 1325.8], [1.62029718E12, 1351.1333333333334], [1.62029664E12, 525.4], [1.62029712E12, 1351.3], [1.62029682E12, 1355.5333333333333], [1.62029676E12, 1337.85], [1.62029724E12, 779.7333333333333], [1.62029694E12, 1335.3333333333333], [1.62029688E12, 1348.3166666666666], [1.62029706E12, 1348.6666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62029724E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 525.4, "minX": 1.62029664E12, "maxY": 1365.9, "series": [{"data": [[1.620297E12, 1365.9], [1.6202967E12, 1325.8], [1.62029718E12, 1351.1333333333334], [1.62029664E12, 525.4], [1.62029712E12, 1351.3], [1.62029682E12, 1355.5333333333333], [1.62029676E12, 1337.85], [1.62029724E12, 779.7333333333333], [1.62029694E12, 1335.3333333333333], [1.62029688E12, 1348.3166666666666], [1.62029706E12, 1348.6666666666667]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62029724E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 525.4, "minX": 1.62029664E12, "maxY": 1365.9, "series": [{"data": [[1.620297E12, 1365.9], [1.6202967E12, 1325.8], [1.62029718E12, 1351.1333333333334], [1.62029664E12, 525.4], [1.62029712E12, 1351.3], [1.62029682E12, 1355.5333333333333], [1.62029676E12, 1337.85], [1.62029724E12, 779.7333333333333], [1.62029694E12, 1335.3333333333333], [1.62029688E12, 1348.3166666666666], [1.62029706E12, 1348.6666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62029724E12, "title": "Total Transactions Per Second"}},
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

