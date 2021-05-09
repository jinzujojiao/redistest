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
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 1398.0, "series": [{"data": [[0.0, 9.0], [0.1, 68.0], [0.2, 75.0], [0.3, 79.0], [0.4, 82.0], [0.5, 85.0], [0.6, 88.0], [0.7, 90.0], [0.8, 92.0], [0.9, 93.0], [1.0, 94.0], [1.1, 96.0], [1.2, 97.0], [1.3, 99.0], [1.4, 100.0], [1.5, 101.0], [1.6, 102.0], [1.7, 103.0], [1.8, 104.0], [1.9, 105.0], [2.0, 106.0], [2.1, 107.0], [2.2, 108.0], [2.3, 109.0], [2.4, 109.0], [2.5, 110.0], [2.6, 111.0], [2.7, 112.0], [2.8, 112.0], [2.9, 113.0], [3.0, 114.0], [3.1, 114.0], [3.2, 115.0], [3.3, 116.0], [3.4, 116.0], [3.5, 117.0], [3.6, 118.0], [3.7, 118.0], [3.8, 119.0], [3.9, 119.0], [4.0, 120.0], [4.1, 120.0], [4.2, 121.0], [4.3, 121.0], [4.4, 122.0], [4.5, 122.0], [4.6, 123.0], [4.7, 123.0], [4.8, 124.0], [4.9, 124.0], [5.0, 125.0], [5.1, 125.0], [5.2, 126.0], [5.3, 126.0], [5.4, 127.0], [5.5, 127.0], [5.6, 128.0], [5.7, 128.0], [5.8, 129.0], [5.9, 129.0], [6.0, 129.0], [6.1, 130.0], [6.2, 130.0], [6.3, 131.0], [6.4, 131.0], [6.5, 131.0], [6.6, 132.0], [6.7, 132.0], [6.8, 133.0], [6.9, 133.0], [7.0, 133.0], [7.1, 134.0], [7.2, 134.0], [7.3, 134.0], [7.4, 135.0], [7.5, 135.0], [7.6, 135.0], [7.7, 136.0], [7.8, 136.0], [7.9, 136.0], [8.0, 137.0], [8.1, 137.0], [8.2, 137.0], [8.3, 138.0], [8.4, 138.0], [8.5, 138.0], [8.6, 139.0], [8.7, 139.0], [8.8, 139.0], [8.9, 140.0], [9.0, 140.0], [9.1, 140.0], [9.2, 141.0], [9.3, 141.0], [9.4, 141.0], [9.5, 142.0], [9.6, 142.0], [9.7, 142.0], [9.8, 143.0], [9.9, 143.0], [10.0, 143.0], [10.1, 143.0], [10.2, 144.0], [10.3, 144.0], [10.4, 144.0], [10.5, 145.0], [10.6, 145.0], [10.7, 145.0], [10.8, 145.0], [10.9, 146.0], [11.0, 146.0], [11.1, 146.0], [11.2, 147.0], [11.3, 147.0], [11.4, 147.0], [11.5, 147.0], [11.6, 148.0], [11.7, 148.0], [11.8, 148.0], [11.9, 148.0], [12.0, 149.0], [12.1, 149.0], [12.2, 149.0], [12.3, 149.0], [12.4, 150.0], [12.5, 150.0], [12.6, 150.0], [12.7, 150.0], [12.8, 151.0], [12.9, 151.0], [13.0, 151.0], [13.1, 151.0], [13.2, 152.0], [13.3, 152.0], [13.4, 152.0], [13.5, 152.0], [13.6, 153.0], [13.7, 153.0], [13.8, 153.0], [13.9, 153.0], [14.0, 154.0], [14.1, 154.0], [14.2, 154.0], [14.3, 154.0], [14.4, 154.0], [14.5, 155.0], [14.6, 155.0], [14.7, 155.0], [14.8, 155.0], [14.9, 156.0], [15.0, 156.0], [15.1, 156.0], [15.2, 156.0], [15.3, 157.0], [15.4, 157.0], [15.5, 157.0], [15.6, 157.0], [15.7, 157.0], [15.8, 158.0], [15.9, 158.0], [16.0, 158.0], [16.1, 158.0], [16.2, 159.0], [16.3, 159.0], [16.4, 159.0], [16.5, 159.0], [16.6, 159.0], [16.7, 160.0], [16.8, 160.0], [16.9, 160.0], [17.0, 160.0], [17.1, 160.0], [17.2, 161.0], [17.3, 161.0], [17.4, 161.0], [17.5, 161.0], [17.6, 162.0], [17.7, 162.0], [17.8, 162.0], [17.9, 162.0], [18.0, 162.0], [18.1, 163.0], [18.2, 163.0], [18.3, 163.0], [18.4, 163.0], [18.5, 163.0], [18.6, 163.0], [18.7, 164.0], [18.8, 164.0], [18.9, 164.0], [19.0, 164.0], [19.1, 164.0], [19.2, 165.0], [19.3, 165.0], [19.4, 165.0], [19.5, 165.0], [19.6, 166.0], [19.7, 166.0], [19.8, 166.0], [19.9, 166.0], [20.0, 166.0], [20.1, 166.0], [20.2, 167.0], [20.3, 167.0], [20.4, 167.0], [20.5, 167.0], [20.6, 167.0], [20.7, 168.0], [20.8, 168.0], [20.9, 168.0], [21.0, 168.0], [21.1, 168.0], [21.2, 169.0], [21.3, 169.0], [21.4, 169.0], [21.5, 169.0], [21.6, 169.0], [21.7, 170.0], [21.8, 170.0], [21.9, 170.0], [22.0, 170.0], [22.1, 170.0], [22.2, 170.0], [22.3, 171.0], [22.4, 171.0], [22.5, 171.0], [22.6, 171.0], [22.7, 171.0], [22.8, 172.0], [22.9, 172.0], [23.0, 172.0], [23.1, 172.0], [23.2, 172.0], [23.3, 172.0], [23.4, 173.0], [23.5, 173.0], [23.6, 173.0], [23.7, 173.0], [23.8, 173.0], [23.9, 174.0], [24.0, 174.0], [24.1, 174.0], [24.2, 174.0], [24.3, 174.0], [24.4, 174.0], [24.5, 175.0], [24.6, 175.0], [24.7, 175.0], [24.8, 175.0], [24.9, 175.0], [25.0, 175.0], [25.1, 176.0], [25.2, 176.0], [25.3, 176.0], [25.4, 176.0], [25.5, 176.0], [25.6, 176.0], [25.7, 177.0], [25.8, 177.0], [25.9, 177.0], [26.0, 177.0], [26.1, 177.0], [26.2, 178.0], [26.3, 178.0], [26.4, 178.0], [26.5, 178.0], [26.6, 178.0], [26.7, 178.0], [26.8, 178.0], [26.9, 179.0], [27.0, 179.0], [27.1, 179.0], [27.2, 179.0], [27.3, 179.0], [27.4, 179.0], [27.5, 180.0], [27.6, 180.0], [27.7, 180.0], [27.8, 180.0], [27.9, 180.0], [28.0, 180.0], [28.1, 181.0], [28.2, 181.0], [28.3, 181.0], [28.4, 181.0], [28.5, 181.0], [28.6, 181.0], [28.7, 181.0], [28.8, 182.0], [28.9, 182.0], [29.0, 182.0], [29.1, 182.0], [29.2, 182.0], [29.3, 182.0], [29.4, 183.0], [29.5, 183.0], [29.6, 183.0], [29.7, 183.0], [29.8, 183.0], [29.9, 183.0], [30.0, 184.0], [30.1, 184.0], [30.2, 184.0], [30.3, 184.0], [30.4, 184.0], [30.5, 184.0], [30.6, 184.0], [30.7, 185.0], [30.8, 185.0], [30.9, 185.0], [31.0, 185.0], [31.1, 185.0], [31.2, 185.0], [31.3, 186.0], [31.4, 186.0], [31.5, 186.0], [31.6, 186.0], [31.7, 186.0], [31.8, 186.0], [31.9, 186.0], [32.0, 187.0], [32.1, 187.0], [32.2, 187.0], [32.3, 187.0], [32.4, 187.0], [32.5, 187.0], [32.6, 188.0], [32.7, 188.0], [32.8, 188.0], [32.9, 188.0], [33.0, 188.0], [33.1, 188.0], [33.2, 188.0], [33.3, 189.0], [33.4, 189.0], [33.5, 189.0], [33.6, 189.0], [33.7, 189.0], [33.8, 189.0], [33.9, 189.0], [34.0, 190.0], [34.1, 190.0], [34.2, 190.0], [34.3, 190.0], [34.4, 190.0], [34.5, 190.0], [34.6, 190.0], [34.7, 191.0], [34.8, 191.0], [34.9, 191.0], [35.0, 191.0], [35.1, 191.0], [35.2, 191.0], [35.3, 191.0], [35.4, 192.0], [35.5, 192.0], [35.6, 192.0], [35.7, 192.0], [35.8, 192.0], [35.9, 192.0], [36.0, 192.0], [36.1, 193.0], [36.2, 193.0], [36.3, 193.0], [36.4, 193.0], [36.5, 193.0], [36.6, 193.0], [36.7, 193.0], [36.8, 194.0], [36.9, 194.0], [37.0, 194.0], [37.1, 194.0], [37.2, 194.0], [37.3, 194.0], [37.4, 194.0], [37.5, 195.0], [37.6, 195.0], [37.7, 195.0], [37.8, 195.0], [37.9, 195.0], [38.0, 195.0], [38.1, 195.0], [38.2, 195.0], [38.3, 196.0], [38.4, 196.0], [38.5, 196.0], [38.6, 196.0], [38.7, 196.0], [38.8, 196.0], [38.9, 196.0], [39.0, 197.0], [39.1, 197.0], [39.2, 197.0], [39.3, 197.0], [39.4, 197.0], [39.5, 197.0], [39.6, 197.0], [39.7, 198.0], [39.8, 198.0], [39.9, 198.0], [40.0, 198.0], [40.1, 198.0], [40.2, 198.0], [40.3, 198.0], [40.4, 199.0], [40.5, 199.0], [40.6, 199.0], [40.7, 199.0], [40.8, 199.0], [40.9, 199.0], [41.0, 199.0], [41.1, 199.0], [41.2, 200.0], [41.3, 200.0], [41.4, 200.0], [41.5, 200.0], [41.6, 200.0], [41.7, 200.0], [41.8, 200.0], [41.9, 200.0], [42.0, 201.0], [42.1, 201.0], [42.2, 201.0], [42.3, 201.0], [42.4, 201.0], [42.5, 201.0], [42.6, 201.0], [42.7, 201.0], [42.8, 202.0], [42.9, 202.0], [43.0, 202.0], [43.1, 202.0], [43.2, 202.0], [43.3, 202.0], [43.4, 202.0], [43.5, 202.0], [43.6, 203.0], [43.7, 203.0], [43.8, 203.0], [43.9, 203.0], [44.0, 203.0], [44.1, 203.0], [44.2, 203.0], [44.3, 204.0], [44.4, 204.0], [44.5, 204.0], [44.6, 204.0], [44.7, 204.0], [44.8, 204.0], [44.9, 204.0], [45.0, 204.0], [45.1, 205.0], [45.2, 205.0], [45.3, 205.0], [45.4, 205.0], [45.5, 205.0], [45.6, 205.0], [45.7, 205.0], [45.8, 205.0], [45.9, 205.0], [46.0, 206.0], [46.1, 206.0], [46.2, 206.0], [46.3, 206.0], [46.4, 206.0], [46.5, 206.0], [46.6, 206.0], [46.7, 206.0], [46.8, 207.0], [46.9, 207.0], [47.0, 207.0], [47.1, 207.0], [47.2, 207.0], [47.3, 207.0], [47.4, 207.0], [47.5, 207.0], [47.6, 208.0], [47.7, 208.0], [47.8, 208.0], [47.9, 208.0], [48.0, 208.0], [48.1, 208.0], [48.2, 208.0], [48.3, 208.0], [48.4, 209.0], [48.5, 209.0], [48.6, 209.0], [48.7, 209.0], [48.8, 209.0], [48.9, 209.0], [49.0, 209.0], [49.1, 209.0], [49.2, 210.0], [49.3, 210.0], [49.4, 210.0], [49.5, 210.0], [49.6, 210.0], [49.7, 210.0], [49.8, 210.0], [49.9, 210.0], [50.0, 211.0], [50.1, 211.0], [50.2, 211.0], [50.3, 211.0], [50.4, 211.0], [50.5, 211.0], [50.6, 211.0], [50.7, 212.0], [50.8, 212.0], [50.9, 212.0], [51.0, 212.0], [51.1, 212.0], [51.2, 212.0], [51.3, 212.0], [51.4, 212.0], [51.5, 213.0], [51.6, 213.0], [51.7, 213.0], [51.8, 213.0], [51.9, 213.0], [52.0, 213.0], [52.1, 213.0], [52.2, 213.0], [52.3, 214.0], [52.4, 214.0], [52.5, 214.0], [52.6, 214.0], [52.7, 214.0], [52.8, 214.0], [52.9, 214.0], [53.0, 214.0], [53.1, 215.0], [53.2, 215.0], [53.3, 215.0], [53.4, 215.0], [53.5, 215.0], [53.6, 215.0], [53.7, 215.0], [53.8, 215.0], [53.9, 216.0], [54.0, 216.0], [54.1, 216.0], [54.2, 216.0], [54.3, 216.0], [54.4, 216.0], [54.5, 216.0], [54.6, 216.0], [54.7, 217.0], [54.8, 217.0], [54.9, 217.0], [55.0, 217.0], [55.1, 217.0], [55.2, 217.0], [55.3, 217.0], [55.4, 217.0], [55.5, 218.0], [55.6, 218.0], [55.7, 218.0], [55.8, 218.0], [55.9, 218.0], [56.0, 218.0], [56.1, 218.0], [56.2, 218.0], [56.3, 219.0], [56.4, 219.0], [56.5, 219.0], [56.6, 219.0], [56.7, 219.0], [56.8, 219.0], [56.9, 219.0], [57.0, 219.0], [57.1, 220.0], [57.2, 220.0], [57.3, 220.0], [57.4, 220.0], [57.5, 220.0], [57.6, 220.0], [57.7, 220.0], [57.8, 220.0], [57.9, 220.0], [58.0, 221.0], [58.1, 221.0], [58.2, 221.0], [58.3, 221.0], [58.4, 221.0], [58.5, 221.0], [58.6, 221.0], [58.7, 222.0], [58.8, 222.0], [58.9, 222.0], [59.0, 222.0], [59.1, 222.0], [59.2, 222.0], [59.3, 222.0], [59.4, 222.0], [59.5, 223.0], [59.6, 223.0], [59.7, 223.0], [59.8, 223.0], [59.9, 223.0], [60.0, 223.0], [60.1, 223.0], [60.2, 223.0], [60.3, 223.0], [60.4, 224.0], [60.5, 224.0], [60.6, 224.0], [60.7, 224.0], [60.8, 224.0], [60.9, 224.0], [61.0, 224.0], [61.1, 225.0], [61.2, 225.0], [61.3, 225.0], [61.4, 225.0], [61.5, 225.0], [61.6, 225.0], [61.7, 225.0], [61.8, 225.0], [61.9, 225.0], [62.0, 226.0], [62.1, 226.0], [62.2, 226.0], [62.3, 226.0], [62.4, 226.0], [62.5, 226.0], [62.6, 226.0], [62.7, 227.0], [62.8, 227.0], [62.9, 227.0], [63.0, 227.0], [63.1, 227.0], [63.2, 227.0], [63.3, 227.0], [63.4, 227.0], [63.5, 228.0], [63.6, 228.0], [63.7, 228.0], [63.8, 228.0], [63.9, 228.0], [64.0, 228.0], [64.1, 228.0], [64.2, 228.0], [64.3, 229.0], [64.4, 229.0], [64.5, 229.0], [64.6, 229.0], [64.7, 229.0], [64.8, 229.0], [64.9, 229.0], [65.0, 229.0], [65.1, 230.0], [65.2, 230.0], [65.3, 230.0], [65.4, 230.0], [65.5, 230.0], [65.6, 230.0], [65.7, 230.0], [65.8, 231.0], [65.9, 231.0], [66.0, 231.0], [66.1, 231.0], [66.2, 231.0], [66.3, 231.0], [66.4, 231.0], [66.5, 231.0], [66.6, 232.0], [66.7, 232.0], [66.8, 232.0], [66.9, 232.0], [67.0, 232.0], [67.1, 232.0], [67.2, 232.0], [67.3, 233.0], [67.4, 233.0], [67.5, 233.0], [67.6, 233.0], [67.7, 233.0], [67.8, 233.0], [67.9, 233.0], [68.0, 234.0], [68.1, 234.0], [68.2, 234.0], [68.3, 234.0], [68.4, 234.0], [68.5, 234.0], [68.6, 234.0], [68.7, 234.0], [68.8, 235.0], [68.9, 235.0], [69.0, 235.0], [69.1, 235.0], [69.2, 235.0], [69.3, 235.0], [69.4, 235.0], [69.5, 236.0], [69.6, 236.0], [69.7, 236.0], [69.8, 236.0], [69.9, 236.0], [70.0, 236.0], [70.1, 236.0], [70.2, 237.0], [70.3, 237.0], [70.4, 237.0], [70.5, 237.0], [70.6, 237.0], [70.7, 237.0], [70.8, 237.0], [70.9, 238.0], [71.0, 238.0], [71.1, 238.0], [71.2, 238.0], [71.3, 238.0], [71.4, 238.0], [71.5, 238.0], [71.6, 239.0], [71.7, 239.0], [71.8, 239.0], [71.9, 239.0], [72.0, 239.0], [72.1, 239.0], [72.2, 240.0], [72.3, 240.0], [72.4, 240.0], [72.5, 240.0], [72.6, 240.0], [72.7, 240.0], [72.8, 240.0], [72.9, 241.0], [73.0, 241.0], [73.1, 241.0], [73.2, 241.0], [73.3, 241.0], [73.4, 241.0], [73.5, 242.0], [73.6, 242.0], [73.7, 242.0], [73.8, 242.0], [73.9, 242.0], [74.0, 242.0], [74.1, 242.0], [74.2, 243.0], [74.3, 243.0], [74.4, 243.0], [74.5, 243.0], [74.6, 243.0], [74.7, 243.0], [74.8, 244.0], [74.9, 244.0], [75.0, 244.0], [75.1, 244.0], [75.2, 244.0], [75.3, 244.0], [75.4, 245.0], [75.5, 245.0], [75.6, 245.0], [75.7, 245.0], [75.8, 245.0], [75.9, 245.0], [76.0, 246.0], [76.1, 246.0], [76.2, 246.0], [76.3, 246.0], [76.4, 246.0], [76.5, 246.0], [76.6, 247.0], [76.7, 247.0], [76.8, 247.0], [76.9, 247.0], [77.0, 247.0], [77.1, 247.0], [77.2, 248.0], [77.3, 248.0], [77.4, 248.0], [77.5, 248.0], [77.6, 248.0], [77.7, 248.0], [77.8, 249.0], [77.9, 249.0], [78.0, 249.0], [78.1, 249.0], [78.2, 249.0], [78.3, 249.0], [78.4, 250.0], [78.5, 250.0], [78.6, 250.0], [78.7, 250.0], [78.8, 250.0], [78.9, 251.0], [79.0, 251.0], [79.1, 251.0], [79.2, 251.0], [79.3, 251.0], [79.4, 252.0], [79.5, 252.0], [79.6, 252.0], [79.7, 252.0], [79.8, 252.0], [79.9, 253.0], [80.0, 253.0], [80.1, 253.0], [80.2, 253.0], [80.3, 253.0], [80.4, 254.0], [80.5, 254.0], [80.6, 254.0], [80.7, 254.0], [80.8, 254.0], [80.9, 255.0], [81.0, 255.0], [81.1, 255.0], [81.2, 255.0], [81.3, 255.0], [81.4, 256.0], [81.5, 256.0], [81.6, 256.0], [81.7, 256.0], [81.8, 256.0], [81.9, 257.0], [82.0, 257.0], [82.1, 257.0], [82.2, 257.0], [82.3, 258.0], [82.4, 258.0], [82.5, 258.0], [82.6, 258.0], [82.7, 258.0], [82.8, 259.0], [82.9, 259.0], [83.0, 259.0], [83.1, 259.0], [83.2, 260.0], [83.3, 260.0], [83.4, 260.0], [83.5, 260.0], [83.6, 260.0], [83.7, 261.0], [83.8, 261.0], [83.9, 261.0], [84.0, 262.0], [84.1, 262.0], [84.2, 262.0], [84.3, 262.0], [84.4, 263.0], [84.5, 263.0], [84.6, 263.0], [84.7, 263.0], [84.8, 264.0], [84.9, 264.0], [85.0, 264.0], [85.1, 264.0], [85.2, 265.0], [85.3, 265.0], [85.4, 265.0], [85.5, 265.0], [85.6, 266.0], [85.7, 266.0], [85.8, 266.0], [85.9, 266.0], [86.0, 267.0], [86.1, 267.0], [86.2, 267.0], [86.3, 268.0], [86.4, 268.0], [86.5, 268.0], [86.6, 268.0], [86.7, 269.0], [86.8, 269.0], [86.9, 269.0], [87.0, 270.0], [87.1, 270.0], [87.2, 270.0], [87.3, 271.0], [87.4, 271.0], [87.5, 271.0], [87.6, 271.0], [87.7, 272.0], [87.8, 272.0], [87.9, 272.0], [88.0, 273.0], [88.1, 273.0], [88.2, 273.0], [88.3, 274.0], [88.4, 274.0], [88.5, 274.0], [88.6, 275.0], [88.7, 275.0], [88.8, 275.0], [88.9, 276.0], [89.0, 276.0], [89.1, 277.0], [89.2, 277.0], [89.3, 277.0], [89.4, 278.0], [89.5, 278.0], [89.6, 279.0], [89.7, 279.0], [89.8, 280.0], [89.9, 280.0], [90.0, 281.0], [90.1, 281.0], [90.2, 281.0], [90.3, 282.0], [90.4, 282.0], [90.5, 283.0], [90.6, 283.0], [90.7, 284.0], [90.8, 284.0], [90.9, 284.0], [91.0, 285.0], [91.1, 285.0], [91.2, 286.0], [91.3, 286.0], [91.4, 287.0], [91.5, 288.0], [91.6, 288.0], [91.7, 289.0], [91.8, 289.0], [91.9, 290.0], [92.0, 290.0], [92.1, 291.0], [92.2, 292.0], [92.3, 292.0], [92.4, 293.0], [92.5, 294.0], [92.6, 294.0], [92.7, 295.0], [92.8, 296.0], [92.9, 297.0], [93.0, 297.0], [93.1, 298.0], [93.2, 299.0], [93.3, 300.0], [93.4, 300.0], [93.5, 301.0], [93.6, 302.0], [93.7, 303.0], [93.8, 304.0], [93.9, 305.0], [94.0, 306.0], [94.1, 307.0], [94.2, 308.0], [94.3, 308.0], [94.4, 309.0], [94.5, 311.0], [94.6, 312.0], [94.7, 313.0], [94.8, 314.0], [94.9, 315.0], [95.0, 317.0], [95.1, 318.0], [95.2, 320.0], [95.3, 321.0], [95.4, 323.0], [95.5, 325.0], [95.6, 326.0], [95.7, 328.0], [95.8, 330.0], [95.9, 333.0], [96.0, 335.0], [96.1, 337.0], [96.2, 340.0], [96.3, 343.0], [96.4, 347.0], [96.5, 351.0], [96.6, 356.0], [96.7, 361.0], [96.8, 367.0], [96.9, 373.0], [97.0, 379.0], [97.1, 385.0], [97.2, 391.0], [97.3, 397.0], [97.4, 404.0], [97.5, 411.0], [97.6, 418.0], [97.7, 424.0], [97.8, 429.0], [97.9, 435.0], [98.0, 440.0], [98.1, 447.0], [98.2, 453.0], [98.3, 459.0], [98.4, 465.0], [98.5, 472.0], [98.6, 477.0], [98.7, 484.0], [98.8, 490.0], [98.9, 497.0], [99.0, 504.0], [99.1, 511.0], [99.2, 518.0], [99.3, 527.0], [99.4, 536.0], [99.5, 547.0], [99.6, 561.0], [99.7, 578.0], [99.8, 603.0], [99.9, 640.0], [100.0, 1398.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 144503.0, "series": [{"data": [[0.0, 3812.0], [600.0, 455.0], [700.0, 80.0], [200.0, 144503.0], [800.0, 18.0], [900.0, 9.0], [1000.0, 10.0], [1100.0, 6.0], [300.0, 11219.0], [1200.0, 4.0], [1300.0, 3.0], [400.0, 4442.0], [100.0, 110287.0], [500.0, 2363.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2910.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 274301.0, "series": [{"data": [[0.0, 274301.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2910.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 98.58773181169765, "minX": 1.61982846E12, "maxY": 100.0, "series": [{"data": [[1.61982882E12, 100.0], [1.61982864E12, 100.0], [1.6198287E12, 100.0], [1.619829E12, 100.0], [1.61982852E12, 100.0], [1.61982906E12, 99.80461459036572], [1.61982858E12, 100.0], [1.61982888E12, 100.0], [1.61982894E12, 100.0], [1.61982846E12, 98.58773181169765], [1.61982876E12, 100.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61982906E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 119.0, "minX": 1.0, "maxY": 669.0, "series": [{"data": [[2.0, 306.0], [3.0, 163.0], [5.0, 178.5], [6.0, 147.0], [8.0, 147.0], [9.0, 151.0], [10.0, 119.0], [11.0, 217.5], [14.0, 184.5], [15.0, 206.5], [16.0, 200.0], [17.0, 241.0], [20.0, 202.0], [22.0, 185.0], [24.0, 158.0], [26.0, 148.66666666666666], [29.0, 211.66666666666666], [32.0, 246.0], [35.0, 192.0], [34.0, 201.0], [37.0, 192.0], [36.0, 184.0], [39.0, 256.0], [38.0, 257.0], [41.0, 242.5], [43.0, 265.5], [44.0, 222.0], [49.0, 243.0], [48.0, 250.0], [51.0, 206.0], [50.0, 280.6666666666667], [54.0, 211.0], [57.0, 203.0], [56.0, 204.0], [59.0, 274.0], [58.0, 214.0], [60.0, 325.5], [61.0, 224.0], [62.0, 224.0], [65.0, 366.25], [67.0, 427.0], [66.0, 226.0], [64.0, 201.0], [68.0, 431.0], [71.0, 421.6666666666667], [70.0, 332.0], [69.0, 258.0], [73.0, 334.0], [74.0, 537.0], [75.0, 232.0], [76.0, 561.0], [77.0, 340.75], [78.0, 467.33333333333337], [79.0, 221.0], [81.0, 455.5], [82.0, 425.33333333333337], [80.0, 232.0], [84.0, 432.5], [85.0, 669.0], [87.0, 403.3333333333333], [86.0, 285.0], [90.0, 379.6666666666667], [91.0, 378.6], [89.0, 207.0], [92.0, 456.5], [93.0, 413.5], [95.0, 247.5], [94.0, 277.0], [96.0, 236.75], [98.0, 236.8], [97.0, 234.0], [100.0, 216.19631622830317], [1.0, 618.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[99.97868049969222, 216.25311044655604]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1845.9666666666667, "minX": 1.61982846E12, "maxY": 149045.9, "series": [{"data": [[1.61982882E12, 144958.31666666668], [1.61982864E12, 149045.9], [1.6198287E12, 140792.3], [1.619829E12, 134251.23333333334], [1.61982852E12, 147324.0], [1.61982906E12, 127482.71666666666], [1.61982858E12, 147769.6], [1.61982888E12, 137377.41666666666], [1.61982894E12, 138417.48333333334], [1.61982846E12, 3551.733333333333], [1.61982876E12, 132258.58333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61982882E12, 75410.76666666666], [1.61982864E12, 77538.5], [1.6198287E12, 73248.8], [1.619829E12, 69849.16666666667], [1.61982852E12, 76630.0], [1.61982906E12, 66309.96666666666], [1.61982858E12, 76869.63333333333], [1.61982888E12, 71458.13333333333], [1.61982894E12, 72013.76666666666], [1.61982846E12, 1845.9666666666667], [1.61982876E12, 68814.26666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61982906E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 203.88721344880304, "minX": 1.61982846E12, "maxY": 347.5263908701855, "series": [{"data": [[1.61982882E12, 209.63243356496866], [1.61982864E12, 203.88721344880304], [1.6198287E12, 215.6500215703192], [1.619829E12, 226.13873704052705], [1.61982852E12, 206.2856013745705], [1.61982906E12, 226.95008141058804], [1.61982858E12, 205.35500668013987], [1.61982888E12, 220.939784787734], [1.61982894E12, 219.378542436099], [1.61982846E12, 347.5263908701855], [1.61982876E12, 229.35653604775905]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61982906E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 203.8616403464094, "minX": 1.61982846E12, "maxY": 347.2724679029959, "series": [{"data": [[1.61982882E12, 209.60435799839254], [1.61982864E12, 203.8616403464094], [1.6198287E12, 215.6209016393457], [1.619829E12, 226.1092177191339], [1.61982852E12, 206.25384879725087], [1.61982906E12, 226.92029704936294], [1.61982858E12, 205.3283203727166], [1.61982888E12, 220.91056161556696], [1.61982894E12, 219.34958130690782], [1.61982846E12, 347.2724679029959], [1.61982876E12, 229.32902188887172]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61982906E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.027560137457044494, "minX": 1.61982846E12, "maxY": 0.7089871611982894, "series": [{"data": [[1.61982882E12, 0.039180081712469644], [1.61982864E12, 0.03888605875360834], [1.6198287E12, 0.04479436295657149], [1.619829E12, 0.039698397737982796], [1.61982852E12, 0.027560137457044494], [1.61982906E12, 0.029069536555339517], [1.61982858E12, 0.03614127642081406], [1.61982888E12, 0.03508254716981113], [1.61982894E12, 0.03718872271181492], [1.61982846E12, 0.7089871611982894], [1.61982876E12, 0.034210929129037206]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61982906E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.61982846E12, "maxY": 1398.0, "series": [{"data": [[1.61982882E12, 1211.0], [1.61982864E12, 1110.0], [1.6198287E12, 893.0], [1.619829E12, 970.0], [1.61982852E12, 1187.0], [1.61982906E12, 1221.0], [1.61982858E12, 1316.0], [1.61982888E12, 869.0], [1.61982894E12, 1398.0], [1.61982846E12, 888.0], [1.61982876E12, 924.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61982882E12, 263.0], [1.61982864E12, 262.0], [1.6198287E12, 280.0], [1.619829E12, 285.0], [1.61982852E12, 255.0], [1.61982906E12, 289.0], [1.61982858E12, 255.0], [1.61982888E12, 282.0], [1.61982894E12, 277.0], [1.61982846E12, 538.8000000000001], [1.61982876E12, 296.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61982882E12, 495.0], [1.61982864E12, 478.0], [1.6198287E12, 505.0], [1.619829E12, 515.9900000000016], [1.61982852E12, 458.0], [1.61982906E12, 511.0], [1.61982858E12, 465.0], [1.61982888E12, 509.9900000000016], [1.61982894E12, 510.9900000000016], [1.61982846E12, 757.98], [1.61982876E12, 535.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61982882E12, 299.0], [1.61982864E12, 294.0], [1.6198287E12, 319.0], [1.619829E12, 322.0], [1.61982852E12, 283.0], [1.61982906E12, 326.0], [1.61982858E12, 284.0], [1.61982888E12, 319.0], [1.61982894E12, 317.0], [1.61982846E12, 639.8], [1.61982876E12, 337.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61982882E12, 39.0], [1.61982864E12, 9.0], [1.6198287E12, 16.0], [1.619829E12, 56.0], [1.61982852E12, 17.0], [1.61982906E12, 60.0], [1.61982858E12, 51.0], [1.61982888E12, 48.0], [1.61982894E12, 65.0], [1.61982846E12, 75.0], [1.61982876E12, 54.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61982882E12, 196.0], [1.61982864E12, 200.0], [1.6198287E12, 214.0], [1.619829E12, 223.0], [1.61982852E12, 192.0], [1.61982906E12, 224.0], [1.61982858E12, 192.0], [1.61982888E12, 211.0], [1.61982894E12, 212.0], [1.61982846E12, 311.0], [1.61982876E12, 223.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61982906E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 153.5, "minX": 73.0, "maxY": 506.0, "series": [{"data": [[73.0, 506.0], [82.0, 207.0], [293.0, 347.0], [335.0, 298.0], [347.0, 282.0], [345.0, 300.0], [343.0, 265.0], [367.0, 287.0], [357.0, 261.5], [360.0, 270.5], [358.0, 277.0], [355.0, 280.0], [352.0, 264.5], [382.0, 246.0], [369.0, 256.0], [376.0, 247.5], [381.0, 274.0], [371.0, 262.0], [383.0, 259.0], [379.0, 251.0], [368.0, 254.5], [380.0, 255.5], [385.0, 258.0], [389.0, 243.0], [399.0, 245.0], [393.0, 247.0], [394.0, 248.0], [398.0, 248.0], [387.0, 246.0], [390.0, 247.0], [396.0, 248.0], [397.0, 246.0], [384.0, 247.0], [391.0, 241.0], [388.0, 247.0], [412.0, 236.0], [400.0, 253.0], [402.0, 239.0], [401.0, 247.0], [414.0, 237.0], [413.0, 238.0], [407.0, 241.0], [415.0, 237.0], [405.0, 245.0], [406.0, 240.0], [409.0, 239.0], [410.0, 235.0], [411.0, 246.0], [408.0, 251.0], [429.0, 227.0], [423.0, 219.0], [421.0, 231.0], [420.0, 233.5], [418.0, 233.0], [416.0, 232.0], [417.0, 231.0], [424.0, 228.5], [427.0, 229.0], [426.0, 228.0], [425.0, 225.0], [422.0, 236.0], [428.0, 229.0], [419.0, 232.0], [430.0, 225.0], [431.0, 226.0], [444.0, 220.0], [440.0, 226.0], [442.0, 217.0], [436.0, 225.0], [445.0, 219.0], [446.0, 227.0], [447.0, 217.0], [441.0, 225.0], [443.0, 221.0], [437.0, 222.0], [433.0, 224.0], [432.0, 235.0], [439.0, 222.0], [438.0, 225.0], [434.0, 221.0], [435.0, 222.0], [451.0, 215.0], [455.0, 218.0], [463.0, 208.0], [452.0, 214.0], [462.0, 208.0], [461.0, 214.0], [460.0, 216.0], [458.0, 210.0], [459.0, 214.0], [457.0, 216.0], [456.0, 220.0], [453.0, 215.0], [448.0, 218.0], [450.0, 222.0], [449.0, 219.0], [454.0, 216.0], [476.0, 200.0], [479.0, 204.0], [472.0, 203.0], [473.0, 203.0], [474.0, 204.0], [475.0, 202.0], [466.0, 216.0], [471.0, 207.0], [478.0, 209.0], [477.0, 207.5], [470.0, 212.0], [469.0, 200.0], [468.0, 212.0], [465.0, 210.0], [464.0, 210.0], [467.0, 211.0], [483.0, 202.0], [486.0, 207.0], [484.0, 201.0], [487.0, 200.0], [480.0, 203.0], [494.0, 199.0], [495.0, 197.0], [492.0, 200.0], [493.0, 192.0], [491.0, 194.0], [489.0, 202.0], [490.0, 199.0], [488.0, 205.5], [481.0, 200.0], [482.0, 202.0], [485.0, 197.0], [496.0, 198.0], [501.0, 192.0], [500.0, 190.0], [498.0, 195.0], [508.0, 190.0], [499.0, 201.0], [504.0, 190.0], [510.0, 188.0], [503.0, 191.0], [509.0, 189.0], [497.0, 194.0], [505.0, 190.0], [506.0, 184.0], [502.0, 188.0], [516.0, 186.0], [525.0, 184.0], [530.0, 183.0], [521.0, 186.0], [520.0, 174.0], [526.0, 183.0], [527.0, 181.0], [515.0, 191.0], [514.0, 185.0], [512.0, 184.0], [529.0, 179.0], [522.0, 180.0], [524.0, 180.0], [523.0, 176.0], [528.0, 176.0], [543.0, 178.0], [542.0, 176.0], [538.0, 168.5], [517.0, 174.0], [518.0, 182.0], [537.0, 167.0], [519.0, 188.0], [531.0, 190.0], [532.0, 184.5], [535.0, 178.0], [533.0, 177.0], [549.0, 180.0], [560.0, 157.0], [566.0, 172.0], [553.0, 171.0], [561.0, 166.0], [564.0, 153.5], [545.0, 179.0], [570.0, 166.0], [575.0, 170.0], [573.0, 158.0], [571.0, 168.0], [554.0, 170.0], [558.0, 164.0], [548.0, 179.0], [547.0, 179.0], [567.0, 165.0], [579.0, 161.0], [593.0, 161.0], [584.0, 165.0], [578.0, 155.0], [583.0, 159.0], [607.0, 162.0], [588.0, 155.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 607.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 153.5, "minX": 73.0, "maxY": 506.0, "series": [{"data": [[73.0, 506.0], [82.0, 207.0], [293.0, 347.0], [335.0, 297.0], [347.0, 282.0], [345.0, 300.0], [343.0, 265.0], [367.0, 287.0], [357.0, 261.5], [360.0, 270.0], [358.0, 277.0], [355.0, 280.0], [352.0, 264.5], [382.0, 246.0], [369.0, 256.0], [376.0, 247.5], [381.0, 274.0], [371.0, 262.0], [383.0, 259.0], [379.0, 251.0], [368.0, 254.5], [380.0, 255.5], [385.0, 258.0], [389.0, 243.0], [399.0, 245.0], [393.0, 247.0], [394.0, 248.0], [398.0, 248.0], [387.0, 246.0], [390.0, 247.0], [396.0, 248.0], [397.0, 246.0], [384.0, 247.0], [391.0, 241.0], [388.0, 247.0], [412.0, 236.0], [400.0, 253.0], [402.0, 239.0], [401.0, 247.0], [414.0, 237.0], [413.0, 238.0], [407.0, 240.0], [415.0, 237.0], [405.0, 245.0], [406.0, 240.0], [409.0, 239.0], [410.0, 235.0], [411.0, 246.0], [408.0, 251.0], [429.0, 227.0], [423.0, 219.0], [421.0, 231.0], [420.0, 233.5], [418.0, 233.0], [416.0, 232.0], [417.0, 231.0], [424.0, 228.0], [427.0, 229.0], [426.0, 228.0], [425.0, 225.0], [422.0, 236.0], [428.0, 229.0], [419.0, 232.0], [430.0, 225.0], [431.0, 226.0], [444.0, 220.0], [440.0, 226.0], [442.0, 217.0], [436.0, 225.0], [445.0, 219.0], [446.0, 227.0], [447.0, 217.0], [441.0, 225.0], [443.0, 220.5], [437.0, 222.0], [433.0, 224.0], [432.0, 235.0], [439.0, 221.5], [438.0, 225.0], [434.0, 221.0], [435.0, 222.0], [451.0, 215.0], [455.0, 218.0], [463.0, 208.0], [452.0, 214.0], [462.0, 208.0], [461.0, 214.0], [460.0, 216.0], [458.0, 210.0], [459.0, 213.0], [457.0, 216.0], [456.0, 220.0], [453.0, 215.0], [448.0, 218.0], [450.0, 222.0], [449.0, 219.0], [454.0, 216.0], [476.0, 200.0], [479.0, 204.0], [472.0, 203.0], [473.0, 203.0], [474.0, 204.0], [475.0, 202.0], [466.0, 216.0], [471.0, 206.0], [478.0, 209.0], [477.0, 207.5], [470.0, 212.0], [469.0, 200.0], [468.0, 212.0], [465.0, 210.0], [464.0, 210.0], [467.0, 211.0], [483.0, 202.0], [486.0, 207.0], [484.0, 201.0], [487.0, 200.0], [480.0, 203.0], [494.0, 199.0], [495.0, 197.0], [492.0, 200.0], [493.0, 192.0], [491.0, 194.0], [489.0, 202.0], [490.0, 199.0], [488.0, 205.5], [481.0, 200.0], [482.0, 202.0], [485.0, 197.0], [496.0, 198.0], [501.0, 192.0], [500.0, 190.0], [498.0, 195.0], [508.0, 190.0], [499.0, 201.0], [504.0, 190.0], [510.0, 188.0], [503.0, 191.0], [509.0, 189.0], [497.0, 194.0], [505.0, 190.0], [506.0, 184.0], [502.0, 188.0], [516.0, 186.0], [525.0, 184.0], [530.0, 183.0], [521.0, 186.0], [520.0, 174.0], [526.0, 183.0], [527.0, 181.0], [515.0, 191.0], [514.0, 184.5], [512.0, 184.0], [529.0, 179.0], [522.0, 180.0], [524.0, 180.0], [523.0, 176.0], [528.0, 176.0], [543.0, 178.0], [542.0, 176.0], [538.0, 168.5], [517.0, 174.0], [518.0, 181.5], [537.0, 167.0], [519.0, 188.0], [531.0, 190.0], [532.0, 184.0], [535.0, 178.0], [533.0, 177.0], [549.0, 180.0], [560.0, 157.0], [566.0, 172.0], [553.0, 171.0], [561.0, 166.0], [564.0, 153.5], [545.0, 179.0], [570.0, 166.0], [575.0, 170.0], [573.0, 158.0], [571.0, 168.0], [554.0, 170.0], [558.0, 164.0], [548.0, 179.0], [547.0, 179.0], [567.0, 165.0], [579.0, 161.0], [593.0, 161.0], [584.0, 165.0], [578.0, 155.0], [583.0, 159.0], [607.0, 162.0], [588.0, 155.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 607.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 13.35, "minX": 1.61982846E12, "maxY": 490.76666666666665, "series": [{"data": [[1.61982882E12, 477.28333333333336], [1.61982864E12, 490.76666666666665], [1.6198287E12, 463.6], [1.619829E12, 442.0833333333333], [1.61982852E12, 485.0], [1.61982906E12, 418.01666666666665], [1.61982858E12, 486.5], [1.61982888E12, 452.26666666666665], [1.61982894E12, 455.78333333333336], [1.61982846E12, 13.35], [1.61982876E12, 435.53333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61982906E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.683333333333334, "minX": 1.61982846E12, "maxY": 490.75, "series": [{"data": [[1.61982882E12, 477.28333333333336], [1.61982864E12, 490.75], [1.6198287E12, 463.6], [1.619829E12, 442.0833333333333], [1.61982852E12, 485.0], [1.61982906E12, 419.68333333333334], [1.61982858E12, 486.51666666666665], [1.61982888E12, 452.26666666666665], [1.61982894E12, 455.78333333333336], [1.61982846E12, 11.683333333333334], [1.61982876E12, 435.53333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61982906E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.683333333333334, "minX": 1.61982846E12, "maxY": 490.75, "series": [{"data": [[1.61982882E12, 477.28333333333336], [1.61982864E12, 490.75], [1.6198287E12, 463.6], [1.619829E12, 442.0833333333333], [1.61982852E12, 485.0], [1.61982906E12, 419.68333333333334], [1.61982858E12, 486.51666666666665], [1.61982888E12, 452.26666666666665], [1.61982894E12, 455.78333333333336], [1.61982846E12, 11.683333333333334], [1.61982876E12, 435.53333333333336]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61982906E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.683333333333334, "minX": 1.61982846E12, "maxY": 490.75, "series": [{"data": [[1.61982882E12, 477.28333333333336], [1.61982864E12, 490.75], [1.6198287E12, 463.6], [1.619829E12, 442.0833333333333], [1.61982852E12, 485.0], [1.61982906E12, 419.68333333333334], [1.61982858E12, 486.51666666666665], [1.61982888E12, 452.26666666666665], [1.61982894E12, 455.78333333333336], [1.61982846E12, 11.683333333333334], [1.61982876E12, 435.53333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61982906E12, "title": "Total Transactions Per Second"}},
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

