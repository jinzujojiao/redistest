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
        data: {"result": {"minY": 13.0, "minX": 0.0, "maxY": 1182.0, "series": [{"data": [[0.0, 13.0], [0.1, 65.0], [0.2, 72.0], [0.3, 76.0], [0.4, 80.0], [0.5, 82.0], [0.6, 85.0], [0.7, 86.0], [0.8, 88.0], [0.9, 90.0], [1.0, 91.0], [1.1, 92.0], [1.2, 93.0], [1.3, 95.0], [1.4, 96.0], [1.5, 97.0], [1.6, 98.0], [1.7, 99.0], [1.8, 100.0], [1.9, 101.0], [2.0, 101.0], [2.1, 102.0], [2.2, 103.0], [2.3, 104.0], [2.4, 105.0], [2.5, 105.0], [2.6, 106.0], [2.7, 107.0], [2.8, 107.0], [2.9, 108.0], [3.0, 109.0], [3.1, 109.0], [3.2, 110.0], [3.3, 110.0], [3.4, 111.0], [3.5, 111.0], [3.6, 112.0], [3.7, 113.0], [3.8, 113.0], [3.9, 114.0], [4.0, 114.0], [4.1, 115.0], [4.2, 115.0], [4.3, 115.0], [4.4, 116.0], [4.5, 116.0], [4.6, 117.0], [4.7, 117.0], [4.8, 118.0], [4.9, 118.0], [5.0, 119.0], [5.1, 119.0], [5.2, 120.0], [5.3, 120.0], [5.4, 120.0], [5.5, 121.0], [5.6, 121.0], [5.7, 122.0], [5.8, 122.0], [5.9, 122.0], [6.0, 123.0], [6.1, 123.0], [6.2, 123.0], [6.3, 124.0], [6.4, 124.0], [6.5, 124.0], [6.6, 125.0], [6.7, 125.0], [6.8, 125.0], [6.9, 126.0], [7.0, 126.0], [7.1, 126.0], [7.2, 127.0], [7.3, 127.0], [7.4, 127.0], [7.5, 128.0], [7.6, 128.0], [7.7, 128.0], [7.8, 129.0], [7.9, 129.0], [8.0, 129.0], [8.1, 129.0], [8.2, 130.0], [8.3, 130.0], [8.4, 130.0], [8.5, 131.0], [8.6, 131.0], [8.7, 131.0], [8.8, 132.0], [8.9, 132.0], [9.0, 132.0], [9.1, 132.0], [9.2, 133.0], [9.3, 133.0], [9.4, 133.0], [9.5, 133.0], [9.6, 134.0], [9.7, 134.0], [9.8, 134.0], [9.9, 135.0], [10.0, 135.0], [10.1, 135.0], [10.2, 135.0], [10.3, 136.0], [10.4, 136.0], [10.5, 136.0], [10.6, 136.0], [10.7, 137.0], [10.8, 137.0], [10.9, 137.0], [11.0, 137.0], [11.1, 138.0], [11.2, 138.0], [11.3, 138.0], [11.4, 138.0], [11.5, 139.0], [11.6, 139.0], [11.7, 139.0], [11.8, 139.0], [11.9, 140.0], [12.0, 140.0], [12.1, 140.0], [12.2, 140.0], [12.3, 141.0], [12.4, 141.0], [12.5, 141.0], [12.6, 141.0], [12.7, 142.0], [12.8, 142.0], [12.9, 142.0], [13.0, 142.0], [13.1, 142.0], [13.2, 143.0], [13.3, 143.0], [13.4, 143.0], [13.5, 143.0], [13.6, 144.0], [13.7, 144.0], [13.8, 144.0], [13.9, 144.0], [14.0, 145.0], [14.1, 145.0], [14.2, 145.0], [14.3, 145.0], [14.4, 145.0], [14.5, 146.0], [14.6, 146.0], [14.7, 146.0], [14.8, 146.0], [14.9, 146.0], [15.0, 147.0], [15.1, 147.0], [15.2, 147.0], [15.3, 147.0], [15.4, 148.0], [15.5, 148.0], [15.6, 148.0], [15.7, 148.0], [15.8, 148.0], [15.9, 149.0], [16.0, 149.0], [16.1, 149.0], [16.2, 149.0], [16.3, 149.0], [16.4, 150.0], [16.5, 150.0], [16.6, 150.0], [16.7, 150.0], [16.8, 150.0], [16.9, 151.0], [17.0, 151.0], [17.1, 151.0], [17.2, 151.0], [17.3, 151.0], [17.4, 152.0], [17.5, 152.0], [17.6, 152.0], [17.7, 152.0], [17.8, 152.0], [17.9, 153.0], [18.0, 153.0], [18.1, 153.0], [18.2, 153.0], [18.3, 153.0], [18.4, 154.0], [18.5, 154.0], [18.6, 154.0], [18.7, 154.0], [18.8, 154.0], [18.9, 155.0], [19.0, 155.0], [19.1, 155.0], [19.2, 155.0], [19.3, 155.0], [19.4, 155.0], [19.5, 156.0], [19.6, 156.0], [19.7, 156.0], [19.8, 156.0], [19.9, 156.0], [20.0, 156.0], [20.1, 157.0], [20.2, 157.0], [20.3, 157.0], [20.4, 157.0], [20.5, 157.0], [20.6, 158.0], [20.7, 158.0], [20.8, 158.0], [20.9, 158.0], [21.0, 158.0], [21.1, 159.0], [21.2, 159.0], [21.3, 159.0], [21.4, 159.0], [21.5, 159.0], [21.6, 159.0], [21.7, 160.0], [21.8, 160.0], [21.9, 160.0], [22.0, 160.0], [22.1, 160.0], [22.2, 160.0], [22.3, 161.0], [22.4, 161.0], [22.5, 161.0], [22.6, 161.0], [22.7, 161.0], [22.8, 161.0], [22.9, 162.0], [23.0, 162.0], [23.1, 162.0], [23.2, 162.0], [23.3, 162.0], [23.4, 162.0], [23.5, 163.0], [23.6, 163.0], [23.7, 163.0], [23.8, 163.0], [23.9, 163.0], [24.0, 163.0], [24.1, 164.0], [24.2, 164.0], [24.3, 164.0], [24.4, 164.0], [24.5, 164.0], [24.6, 164.0], [24.7, 165.0], [24.8, 165.0], [24.9, 165.0], [25.0, 165.0], [25.1, 165.0], [25.2, 165.0], [25.3, 166.0], [25.4, 166.0], [25.5, 166.0], [25.6, 166.0], [25.7, 166.0], [25.8, 166.0], [25.9, 167.0], [26.0, 167.0], [26.1, 167.0], [26.2, 167.0], [26.3, 167.0], [26.4, 167.0], [26.5, 168.0], [26.6, 168.0], [26.7, 168.0], [26.8, 168.0], [26.9, 168.0], [27.0, 168.0], [27.1, 168.0], [27.2, 169.0], [27.3, 169.0], [27.4, 169.0], [27.5, 169.0], [27.6, 169.0], [27.7, 169.0], [27.8, 170.0], [27.9, 170.0], [28.0, 170.0], [28.1, 170.0], [28.2, 170.0], [28.3, 170.0], [28.4, 170.0], [28.5, 171.0], [28.6, 171.0], [28.7, 171.0], [28.8, 171.0], [28.9, 171.0], [29.0, 171.0], [29.1, 171.0], [29.2, 172.0], [29.3, 172.0], [29.4, 172.0], [29.5, 172.0], [29.6, 172.0], [29.7, 172.0], [29.8, 172.0], [29.9, 173.0], [30.0, 173.0], [30.1, 173.0], [30.2, 173.0], [30.3, 173.0], [30.4, 173.0], [30.5, 174.0], [30.6, 174.0], [30.7, 174.0], [30.8, 174.0], [30.9, 174.0], [31.0, 174.0], [31.1, 174.0], [31.2, 175.0], [31.3, 175.0], [31.4, 175.0], [31.5, 175.0], [31.6, 175.0], [31.7, 175.0], [31.8, 175.0], [31.9, 175.0], [32.0, 176.0], [32.1, 176.0], [32.2, 176.0], [32.3, 176.0], [32.4, 176.0], [32.5, 176.0], [32.6, 176.0], [32.7, 177.0], [32.8, 177.0], [32.9, 177.0], [33.0, 177.0], [33.1, 177.0], [33.2, 177.0], [33.3, 177.0], [33.4, 178.0], [33.5, 178.0], [33.6, 178.0], [33.7, 178.0], [33.8, 178.0], [33.9, 178.0], [34.0, 178.0], [34.1, 179.0], [34.2, 179.0], [34.3, 179.0], [34.4, 179.0], [34.5, 179.0], [34.6, 179.0], [34.7, 179.0], [34.8, 179.0], [34.9, 180.0], [35.0, 180.0], [35.1, 180.0], [35.2, 180.0], [35.3, 180.0], [35.4, 180.0], [35.5, 180.0], [35.6, 180.0], [35.7, 181.0], [35.8, 181.0], [35.9, 181.0], [36.0, 181.0], [36.1, 181.0], [36.2, 181.0], [36.3, 181.0], [36.4, 182.0], [36.5, 182.0], [36.6, 182.0], [36.7, 182.0], [36.8, 182.0], [36.9, 182.0], [37.0, 182.0], [37.1, 182.0], [37.2, 183.0], [37.3, 183.0], [37.4, 183.0], [37.5, 183.0], [37.6, 183.0], [37.7, 183.0], [37.8, 183.0], [37.9, 183.0], [38.0, 184.0], [38.1, 184.0], [38.2, 184.0], [38.3, 184.0], [38.4, 184.0], [38.5, 184.0], [38.6, 184.0], [38.7, 185.0], [38.8, 185.0], [38.9, 185.0], [39.0, 185.0], [39.1, 185.0], [39.2, 185.0], [39.3, 185.0], [39.4, 185.0], [39.5, 186.0], [39.6, 186.0], [39.7, 186.0], [39.8, 186.0], [39.9, 186.0], [40.0, 186.0], [40.1, 186.0], [40.2, 186.0], [40.3, 187.0], [40.4, 187.0], [40.5, 187.0], [40.6, 187.0], [40.7, 187.0], [40.8, 187.0], [40.9, 187.0], [41.0, 187.0], [41.1, 188.0], [41.2, 188.0], [41.3, 188.0], [41.4, 188.0], [41.5, 188.0], [41.6, 188.0], [41.7, 188.0], [41.8, 188.0], [41.9, 189.0], [42.0, 189.0], [42.1, 189.0], [42.2, 189.0], [42.3, 189.0], [42.4, 189.0], [42.5, 189.0], [42.6, 189.0], [42.7, 189.0], [42.8, 190.0], [42.9, 190.0], [43.0, 190.0], [43.1, 190.0], [43.2, 190.0], [43.3, 190.0], [43.4, 190.0], [43.5, 190.0], [43.6, 191.0], [43.7, 191.0], [43.8, 191.0], [43.9, 191.0], [44.0, 191.0], [44.1, 191.0], [44.2, 191.0], [44.3, 191.0], [44.4, 192.0], [44.5, 192.0], [44.6, 192.0], [44.7, 192.0], [44.8, 192.0], [44.9, 192.0], [45.0, 192.0], [45.1, 192.0], [45.2, 193.0], [45.3, 193.0], [45.4, 193.0], [45.5, 193.0], [45.6, 193.0], [45.7, 193.0], [45.8, 193.0], [45.9, 193.0], [46.0, 193.0], [46.1, 194.0], [46.2, 194.0], [46.3, 194.0], [46.4, 194.0], [46.5, 194.0], [46.6, 194.0], [46.7, 194.0], [46.8, 194.0], [46.9, 195.0], [47.0, 195.0], [47.1, 195.0], [47.2, 195.0], [47.3, 195.0], [47.4, 195.0], [47.5, 195.0], [47.6, 195.0], [47.7, 195.0], [47.8, 196.0], [47.9, 196.0], [48.0, 196.0], [48.1, 196.0], [48.2, 196.0], [48.3, 196.0], [48.4, 196.0], [48.5, 196.0], [48.6, 197.0], [48.7, 197.0], [48.8, 197.0], [48.9, 197.0], [49.0, 197.0], [49.1, 197.0], [49.2, 197.0], [49.3, 197.0], [49.4, 198.0], [49.5, 198.0], [49.6, 198.0], [49.7, 198.0], [49.8, 198.0], [49.9, 198.0], [50.0, 198.0], [50.1, 198.0], [50.2, 198.0], [50.3, 199.0], [50.4, 199.0], [50.5, 199.0], [50.6, 199.0], [50.7, 199.0], [50.8, 199.0], [50.9, 199.0], [51.0, 199.0], [51.1, 200.0], [51.2, 200.0], [51.3, 200.0], [51.4, 200.0], [51.5, 200.0], [51.6, 200.0], [51.7, 200.0], [51.8, 200.0], [51.9, 201.0], [52.0, 201.0], [52.1, 201.0], [52.2, 201.0], [52.3, 201.0], [52.4, 201.0], [52.5, 201.0], [52.6, 201.0], [52.7, 201.0], [52.8, 202.0], [52.9, 202.0], [53.0, 202.0], [53.1, 202.0], [53.2, 202.0], [53.3, 202.0], [53.4, 202.0], [53.5, 202.0], [53.6, 202.0], [53.7, 203.0], [53.8, 203.0], [53.9, 203.0], [54.0, 203.0], [54.1, 203.0], [54.2, 203.0], [54.3, 203.0], [54.4, 203.0], [54.5, 204.0], [54.6, 204.0], [54.7, 204.0], [54.8, 204.0], [54.9, 204.0], [55.0, 204.0], [55.1, 204.0], [55.2, 204.0], [55.3, 204.0], [55.4, 205.0], [55.5, 205.0], [55.6, 205.0], [55.7, 205.0], [55.8, 205.0], [55.9, 205.0], [56.0, 205.0], [56.1, 205.0], [56.2, 206.0], [56.3, 206.0], [56.4, 206.0], [56.5, 206.0], [56.6, 206.0], [56.7, 206.0], [56.8, 206.0], [56.9, 206.0], [57.0, 206.0], [57.1, 207.0], [57.2, 207.0], [57.3, 207.0], [57.4, 207.0], [57.5, 207.0], [57.6, 207.0], [57.7, 207.0], [57.8, 207.0], [57.9, 208.0], [58.0, 208.0], [58.1, 208.0], [58.2, 208.0], [58.3, 208.0], [58.4, 208.0], [58.5, 208.0], [58.6, 208.0], [58.7, 209.0], [58.8, 209.0], [58.9, 209.0], [59.0, 209.0], [59.1, 209.0], [59.2, 209.0], [59.3, 209.0], [59.4, 209.0], [59.5, 210.0], [59.6, 210.0], [59.7, 210.0], [59.8, 210.0], [59.9, 210.0], [60.0, 210.0], [60.1, 210.0], [60.2, 210.0], [60.3, 210.0], [60.4, 211.0], [60.5, 211.0], [60.6, 211.0], [60.7, 211.0], [60.8, 211.0], [60.9, 211.0], [61.0, 211.0], [61.1, 212.0], [61.2, 212.0], [61.3, 212.0], [61.4, 212.0], [61.5, 212.0], [61.6, 212.0], [61.7, 212.0], [61.8, 212.0], [61.9, 213.0], [62.0, 213.0], [62.1, 213.0], [62.2, 213.0], [62.3, 213.0], [62.4, 213.0], [62.5, 213.0], [62.6, 213.0], [62.7, 214.0], [62.8, 214.0], [62.9, 214.0], [63.0, 214.0], [63.1, 214.0], [63.2, 214.0], [63.3, 214.0], [63.4, 215.0], [63.5, 215.0], [63.6, 215.0], [63.7, 215.0], [63.8, 215.0], [63.9, 215.0], [64.0, 215.0], [64.1, 215.0], [64.2, 216.0], [64.3, 216.0], [64.4, 216.0], [64.5, 216.0], [64.6, 216.0], [64.7, 216.0], [64.8, 216.0], [64.9, 216.0], [65.0, 217.0], [65.1, 217.0], [65.2, 217.0], [65.3, 217.0], [65.4, 217.0], [65.5, 217.0], [65.6, 217.0], [65.7, 217.0], [65.8, 218.0], [65.9, 218.0], [66.0, 218.0], [66.1, 218.0], [66.2, 218.0], [66.3, 218.0], [66.4, 218.0], [66.5, 219.0], [66.6, 219.0], [66.7, 219.0], [66.8, 219.0], [66.9, 219.0], [67.0, 219.0], [67.1, 219.0], [67.2, 220.0], [67.3, 220.0], [67.4, 220.0], [67.5, 220.0], [67.6, 220.0], [67.7, 220.0], [67.8, 220.0], [67.9, 220.0], [68.0, 221.0], [68.1, 221.0], [68.2, 221.0], [68.3, 221.0], [68.4, 221.0], [68.5, 221.0], [68.6, 221.0], [68.7, 222.0], [68.8, 222.0], [68.9, 222.0], [69.0, 222.0], [69.1, 222.0], [69.2, 222.0], [69.3, 222.0], [69.4, 223.0], [69.5, 223.0], [69.6, 223.0], [69.7, 223.0], [69.8, 223.0], [69.9, 223.0], [70.0, 223.0], [70.1, 223.0], [70.2, 224.0], [70.3, 224.0], [70.4, 224.0], [70.5, 224.0], [70.6, 224.0], [70.7, 224.0], [70.8, 224.0], [70.9, 225.0], [71.0, 225.0], [71.1, 225.0], [71.2, 225.0], [71.3, 225.0], [71.4, 225.0], [71.5, 225.0], [71.6, 226.0], [71.7, 226.0], [71.8, 226.0], [71.9, 226.0], [72.0, 226.0], [72.1, 226.0], [72.2, 227.0], [72.3, 227.0], [72.4, 227.0], [72.5, 227.0], [72.6, 227.0], [72.7, 227.0], [72.8, 227.0], [72.9, 228.0], [73.0, 228.0], [73.1, 228.0], [73.2, 228.0], [73.3, 228.0], [73.4, 228.0], [73.5, 228.0], [73.6, 229.0], [73.7, 229.0], [73.8, 229.0], [73.9, 229.0], [74.0, 229.0], [74.1, 229.0], [74.2, 230.0], [74.3, 230.0], [74.4, 230.0], [74.5, 230.0], [74.6, 230.0], [74.7, 230.0], [74.8, 231.0], [74.9, 231.0], [75.0, 231.0], [75.1, 231.0], [75.2, 231.0], [75.3, 231.0], [75.4, 232.0], [75.5, 232.0], [75.6, 232.0], [75.7, 232.0], [75.8, 232.0], [75.9, 232.0], [76.0, 233.0], [76.1, 233.0], [76.2, 233.0], [76.3, 233.0], [76.4, 233.0], [76.5, 233.0], [76.6, 234.0], [76.7, 234.0], [76.8, 234.0], [76.9, 234.0], [77.0, 234.0], [77.1, 234.0], [77.2, 235.0], [77.3, 235.0], [77.4, 235.0], [77.5, 235.0], [77.6, 235.0], [77.7, 235.0], [77.8, 236.0], [77.9, 236.0], [78.0, 236.0], [78.1, 236.0], [78.2, 236.0], [78.3, 237.0], [78.4, 237.0], [78.5, 237.0], [78.6, 237.0], [78.7, 237.0], [78.8, 237.0], [78.9, 238.0], [79.0, 238.0], [79.1, 238.0], [79.2, 238.0], [79.3, 238.0], [79.4, 239.0], [79.5, 239.0], [79.6, 239.0], [79.7, 239.0], [79.8, 239.0], [79.9, 240.0], [80.0, 240.0], [80.1, 240.0], [80.2, 240.0], [80.3, 240.0], [80.4, 241.0], [80.5, 241.0], [80.6, 241.0], [80.7, 241.0], [80.8, 241.0], [80.9, 242.0], [81.0, 242.0], [81.1, 242.0], [81.2, 242.0], [81.3, 242.0], [81.4, 243.0], [81.5, 243.0], [81.6, 243.0], [81.7, 243.0], [81.8, 243.0], [81.9, 244.0], [82.0, 244.0], [82.1, 244.0], [82.2, 244.0], [82.3, 244.0], [82.4, 245.0], [82.5, 245.0], [82.6, 245.0], [82.7, 245.0], [82.8, 246.0], [82.9, 246.0], [83.0, 246.0], [83.1, 246.0], [83.2, 247.0], [83.3, 247.0], [83.4, 247.0], [83.5, 247.0], [83.6, 247.0], [83.7, 248.0], [83.8, 248.0], [83.9, 248.0], [84.0, 248.0], [84.1, 249.0], [84.2, 249.0], [84.3, 249.0], [84.4, 249.0], [84.5, 250.0], [84.6, 250.0], [84.7, 250.0], [84.8, 250.0], [84.9, 251.0], [85.0, 251.0], [85.1, 251.0], [85.2, 252.0], [85.3, 252.0], [85.4, 252.0], [85.5, 252.0], [85.6, 253.0], [85.7, 253.0], [85.8, 253.0], [85.9, 253.0], [86.0, 254.0], [86.1, 254.0], [86.2, 254.0], [86.3, 254.0], [86.4, 255.0], [86.5, 255.0], [86.6, 255.0], [86.7, 256.0], [86.8, 256.0], [86.9, 256.0], [87.0, 257.0], [87.1, 257.0], [87.2, 257.0], [87.3, 257.0], [87.4, 258.0], [87.5, 258.0], [87.6, 258.0], [87.7, 259.0], [87.8, 259.0], [87.9, 259.0], [88.0, 260.0], [88.1, 260.0], [88.2, 260.0], [88.3, 261.0], [88.4, 261.0], [88.5, 261.0], [88.6, 262.0], [88.7, 262.0], [88.8, 262.0], [88.9, 263.0], [89.0, 263.0], [89.1, 264.0], [89.2, 264.0], [89.3, 264.0], [89.4, 265.0], [89.5, 265.0], [89.6, 266.0], [89.7, 266.0], [89.8, 266.0], [89.9, 267.0], [90.0, 267.0], [90.1, 268.0], [90.2, 268.0], [90.3, 268.0], [90.4, 269.0], [90.5, 269.0], [90.6, 270.0], [90.7, 270.0], [90.8, 271.0], [90.9, 271.0], [91.0, 272.0], [91.1, 272.0], [91.2, 272.0], [91.3, 273.0], [91.4, 273.0], [91.5, 274.0], [91.6, 275.0], [91.7, 275.0], [91.8, 276.0], [91.9, 276.0], [92.0, 277.0], [92.1, 277.0], [92.2, 278.0], [92.3, 278.0], [92.4, 279.0], [92.5, 280.0], [92.6, 280.0], [92.7, 281.0], [92.8, 282.0], [92.9, 282.0], [93.0, 283.0], [93.1, 284.0], [93.2, 284.0], [93.3, 285.0], [93.4, 286.0], [93.5, 287.0], [93.6, 288.0], [93.7, 288.0], [93.8, 289.0], [93.9, 290.0], [94.0, 291.0], [94.1, 292.0], [94.2, 293.0], [94.3, 294.0], [94.4, 295.0], [94.5, 296.0], [94.6, 297.0], [94.7, 299.0], [94.8, 300.0], [94.9, 301.0], [95.0, 302.0], [95.1, 304.0], [95.2, 305.0], [95.3, 307.0], [95.4, 309.0], [95.5, 311.0], [95.6, 313.0], [95.7, 315.0], [95.8, 318.0], [95.9, 320.0], [96.0, 323.0], [96.1, 326.0], [96.2, 330.0], [96.3, 334.0], [96.4, 338.0], [96.5, 343.0], [96.6, 349.0], [96.7, 356.0], [96.8, 362.0], [96.9, 370.0], [97.0, 377.0], [97.1, 383.0], [97.2, 390.0], [97.3, 397.0], [97.4, 403.0], [97.5, 409.0], [97.6, 415.0], [97.7, 420.0], [97.8, 425.0], [97.9, 430.0], [98.0, 436.0], [98.1, 441.0], [98.2, 446.0], [98.3, 452.0], [98.4, 457.0], [98.5, 462.0], [98.6, 467.0], [98.7, 473.0], [98.8, 479.0], [98.9, 485.0], [99.0, 492.0], [99.1, 499.0], [99.2, 506.0], [99.3, 514.0], [99.4, 523.0], [99.5, 534.0], [99.6, 546.0], [99.7, 560.0], [99.8, 582.0], [99.9, 631.0], [100.0, 1182.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 144120.0, "series": [{"data": [[0.0, 5145.0], [1100.0, 7.0], [300.0, 7516.0], [600.0, 297.0], [700.0, 63.0], [100.0, 144120.0], [200.0, 127804.0], [400.0, 5156.0], [800.0, 21.0], [900.0, 23.0], [500.0, 2163.0], [1000.0, 30.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2569.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 289776.0, "series": [{"data": [[0.0, 289776.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2569.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 95.74973375931843, "minX": 1.61979666E12, "maxY": 100.0, "series": [{"data": [[1.61979696E12, 100.0], [1.61979666E12, 95.74973375931843], [1.61979714E12, 100.0], [1.61979684E12, 100.0], [1.61979702E12, 100.0], [1.61979672E12, 100.0], [1.6197972E12, 100.0], [1.6197969E12, 100.0], [1.61979708E12, 100.0], [1.61979726E12, 99.81715768019271], [1.61979678E12, 100.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61979726E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 47.5, "minX": 2.0, "maxY": 274.0, "series": [{"data": [[2.0, 161.0], [3.0, 161.0], [4.0, 128.0], [6.0, 157.0], [7.0, 186.0], [10.0, 170.66666666666666], [12.0, 139.0], [13.0, 169.5], [16.0, 160.0], [17.0, 141.0], [18.0, 201.0], [20.0, 168.0], [21.0, 154.0], [22.0, 143.0], [23.0, 94.10000000000001], [24.0, 103.0], [25.0, 101.33333333333333], [26.0, 138.0], [27.0, 67.0], [28.0, 76.41666666666667], [29.0, 47.5], [30.0, 54.25], [31.0, 66.33333333333333], [32.0, 124.42857142857142], [33.0, 88.5], [34.0, 61.5], [35.0, 76.0], [37.0, 129.0], [38.0, 126.5], [39.0, 99.85714285714285], [40.0, 97.0], [41.0, 110.25], [42.0, 158.0], [43.0, 102.66666666666667], [44.0, 124.8], [45.0, 221.0], [46.0, 107.0], [47.0, 112.0], [48.0, 104.4], [49.0, 143.25], [50.0, 114.0], [51.0, 116.33333333333333], [53.0, 175.66666666666666], [54.0, 155.2], [55.0, 119.125], [57.0, 151.16666666666669], [58.0, 178.85714285714286], [59.0, 107.85714285714285], [60.0, 126.28571428571429], [61.0, 152.4], [62.0, 116.0], [63.0, 202.0], [65.0, 153.75], [66.0, 150.44444444444443], [67.0, 156.5], [64.0, 163.0], [68.0, 173.66666666666666], [69.0, 151.8], [70.0, 136.5], [71.0, 190.0], [72.0, 143.0], [73.0, 173.33333333333334], [74.0, 165.0], [75.0, 201.83333333333334], [76.0, 147.66666666666666], [77.0, 172.16666666666666], [78.0, 193.0], [79.0, 177.0], [80.0, 175.0], [81.0, 182.24999999999997], [83.0, 178.11111111111111], [82.0, 234.0], [84.0, 167.0], [85.0, 157.0], [86.0, 184.76470588235296], [87.0, 251.0], [88.0, 194.2], [89.0, 216.0], [91.0, 164.00000000000003], [90.0, 274.0], [92.0, 192.85714285714286], [93.0, 167.0], [94.0, 178.57142857142858], [95.0, 207.14285714285714], [99.0, 233.6], [98.0, 269.6666666666667], [97.0, 167.0], [96.0, 252.0], [100.0, 205.14090455979837]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[99.9421642237778, 205.0597923686055]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7465.05, "minX": 1.61979666E12, "maxY": 155345.2, "series": [{"data": [[1.61979696E12, 149112.25], [1.61979666E12, 14272.8], [1.61979714E12, 152304.96666666667], [1.61979684E12, 142564.2], [1.61979702E12, 155345.2], [1.61979672E12, 152508.6], [1.6197972E12, 138458.98333333334], [1.6197969E12, 142894.76666666666], [1.61979708E12, 146131.36666666667], [1.61979726E12, 136583.83333333334], [1.61979678E12, 149640.86666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61979696E12, 78063.7], [1.61979666E12, 7465.05], [1.61979714E12, 79735.85], [1.61979684E12, 74634.6], [1.61979702E12, 81328.5], [1.61979672E12, 79841.85], [1.6197972E12, 72490.75], [1.6197969E12, 74798.9], [1.61979708E12, 76502.85], [1.61979726E12, 71510.25], [1.61979678E12, 78341.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61979726E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 187.12602058927908, "minX": 1.61979666E12, "maxY": 219.52516907329564, "series": [{"data": [[1.61979696E12, 203.56643356643454], [1.61979666E12, 187.12602058927908], [1.61979714E12, 199.26730698926605], [1.61979684E12, 213.03593239596674], [1.61979702E12, 195.53639622026623], [1.61979672E12, 199.0830429154624], [1.6197972E12, 219.52516907329564], [1.6197969E12, 212.47587330829646], [1.61979708E12, 207.7326544043767], [1.61979726E12, 201.26229386696542], [1.61979678E12, 202.92176030849424]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61979726E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 187.0741924032662, "minX": 1.61979666E12, "maxY": 219.50005483458162, "series": [{"data": [[1.61979696E12, 203.5363907936727], [1.61979666E12, 187.0741924032662], [1.61979714E12, 199.23686397022252], [1.61979684E12, 213.0087345547515], [1.61979702E12, 195.51202346041015], [1.61979672E12, 199.05526237180064], [1.6197972E12, 219.50005483458162], [1.6197969E12, 212.4469283639204], [1.61979708E12, 207.70896116941958], [1.61979726E12, 201.23550120437216], [1.61979678E12, 202.89561275919257]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61979726E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.030893502444554504, "minX": 1.61979666E12, "maxY": 0.28682996095136554, "series": [{"data": [[1.61979696E12, 0.03666236675945375], [1.61979666E12, 0.28682996095136554], [1.61979714E12, 0.037089966432915525], [1.61979684E12, 0.03405056099985804], [1.61979702E12, 0.03874226132290642], [1.61979672E12, 0.03674200935975305], [1.6197972E12, 0.033229756900018455], [1.6197969E12, 0.030893502444554504], [1.61979708E12, 0.038934497211541665], [1.61979726E12, 0.08208263850287205], [1.61979678E12, 0.03693806447248224]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61979726E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 13.0, "minX": 1.61979666E12, "maxY": 1182.0, "series": [{"data": [[1.61979696E12, 1106.0], [1.61979666E12, 718.0], [1.61979714E12, 1054.0], [1.61979684E12, 1099.0], [1.61979702E12, 1048.0], [1.61979672E12, 1182.0], [1.6197972E12, 1064.0], [1.6197969E12, 1061.0], [1.61979708E12, 1104.0], [1.61979726E12, 1173.0], [1.61979678E12, 1158.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61979696E12, 265.0], [1.61979666E12, 247.0], [1.61979714E12, 259.0], [1.61979684E12, 273.0], [1.61979702E12, 255.0], [1.61979672E12, 262.0], [1.6197972E12, 281.0], [1.6197969E12, 274.0], [1.61979708E12, 267.0], [1.61979726E12, 260.0], [1.61979678E12, 258.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61979696E12, 488.0], [1.61979666E12, 451.0], [1.61979714E12, 483.9900000000016], [1.61979684E12, 500.9900000000016], [1.61979702E12, 484.9900000000016], [1.61979672E12, 487.0], [1.6197972E12, 510.9900000000016], [1.6197969E12, 498.0], [1.61979708E12, 505.9900000000016], [1.61979726E12, 493.0], [1.61979678E12, 482.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61979696E12, 302.0], [1.61979666E12, 277.0], [1.61979714E12, 292.0], [1.61979684E12, 307.0], [1.61979702E12, 289.0], [1.61979672E12, 297.0], [1.6197972E12, 322.0], [1.6197969E12, 310.0], [1.61979708E12, 301.0], [1.61979726E12, 296.0], [1.61979678E12, 301.9500000000007]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61979696E12, 34.0], [1.61979666E12, 13.0], [1.61979714E12, 40.0], [1.61979684E12, 45.0], [1.61979702E12, 31.0], [1.61979672E12, 34.0], [1.6197972E12, 50.0], [1.6197969E12, 40.0], [1.61979708E12, 49.0], [1.61979726E12, 36.0], [1.61979678E12, 13.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61979696E12, 193.0], [1.61979666E12, 186.0], [1.61979714E12, 193.0], [1.61979684E12, 206.0], [1.61979702E12, 189.0], [1.61979672E12, 197.0], [1.6197972E12, 208.0], [1.6197969E12, 209.0], [1.61979708E12, 200.0], [1.61979726E12, 194.0], [1.61979678E12, 186.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61979726E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 113.0, "minX": 169.0, "maxY": 277.5, "series": [{"data": [[169.0, 221.0], [263.0, 113.0], [367.0, 255.0], [352.0, 277.5], [381.0, 256.0], [379.0, 266.0], [392.0, 252.0], [397.0, 241.0], [395.0, 248.0], [396.0, 250.5], [398.0, 243.0], [387.0, 254.0], [412.0, 234.0], [415.0, 223.0], [402.0, 243.0], [411.0, 237.0], [414.0, 242.0], [408.0, 241.0], [413.0, 239.0], [401.0, 242.0], [405.0, 236.0], [407.0, 239.0], [403.0, 239.5], [419.0, 228.0], [416.0, 231.5], [420.0, 234.0], [418.0, 233.0], [425.0, 225.0], [426.0, 229.0], [427.0, 230.0], [424.0, 232.0], [421.0, 233.0], [423.0, 221.0], [422.0, 233.0], [429.0, 224.0], [430.0, 222.0], [428.0, 228.0], [431.0, 234.0], [417.0, 232.0], [433.0, 225.0], [437.0, 224.0], [436.0, 226.0], [435.0, 227.0], [434.0, 223.0], [444.0, 217.0], [445.0, 222.0], [446.0, 217.0], [438.0, 217.0], [432.0, 221.0], [439.0, 228.0], [447.0, 220.0], [441.0, 221.5], [440.0, 218.0], [442.0, 215.0], [443.0, 222.0], [461.0, 212.0], [457.0, 215.0], [455.0, 215.0], [448.0, 229.0], [460.0, 203.5], [450.0, 233.0], [451.0, 212.0], [449.0, 216.0], [456.0, 215.0], [452.0, 210.0], [453.0, 213.0], [462.0, 212.0], [458.0, 213.0], [463.0, 208.0], [454.0, 212.0], [465.0, 210.0], [479.0, 204.0], [475.0, 204.0], [472.0, 203.0], [473.0, 202.0], [474.0, 200.0], [468.0, 209.0], [470.0, 202.0], [469.0, 209.0], [466.0, 205.0], [467.0, 207.0], [478.0, 197.0], [477.0, 202.0], [476.0, 201.0], [471.0, 209.0], [464.0, 213.0], [492.0, 194.0], [480.0, 202.0], [481.0, 202.0], [487.0, 200.0], [488.0, 199.0], [493.0, 192.0], [490.0, 199.0], [489.0, 195.0], [491.0, 199.0], [495.0, 197.0], [494.0, 198.0], [483.0, 197.0], [482.0, 199.0], [486.0, 198.0], [484.0, 199.0], [485.0, 208.0], [497.0, 194.0], [500.0, 200.0], [502.0, 193.0], [501.0, 189.0], [505.0, 191.0], [504.0, 194.0], [511.0, 181.0], [496.0, 191.0], [506.0, 189.0], [507.0, 188.0], [503.0, 193.0], [509.0, 192.0], [510.0, 194.5], [508.0, 192.0], [499.0, 191.0], [498.0, 197.0], [537.0, 184.0], [512.0, 189.5], [529.0, 182.0], [521.0, 189.0], [520.0, 188.0], [522.0, 183.0], [523.0, 181.0], [524.0, 183.0], [516.0, 186.0], [513.0, 182.0], [515.0, 188.0], [514.0, 192.0], [532.0, 170.0], [530.0, 179.0], [531.0, 177.0], [534.0, 174.0], [533.0, 170.0], [535.0, 168.0], [527.0, 185.0], [525.0, 185.0], [526.0, 185.0], [541.0, 175.0], [538.0, 168.0], [539.0, 177.0], [540.0, 182.0], [543.0, 175.0], [528.0, 181.0], [536.0, 179.0], [519.0, 186.0], [517.0, 185.0], [518.0, 186.0], [549.0, 166.0], [546.0, 174.0], [558.0, 173.5], [557.0, 186.0], [554.0, 173.0], [553.0, 181.0], [552.0, 176.0], [555.0, 173.0], [564.0, 163.0], [565.0, 172.0], [545.0, 168.0], [544.0, 163.0], [559.0, 168.0], [563.0, 172.0], [569.0, 155.0], [550.0, 178.0], [568.0, 167.0], [551.0, 170.0], [561.0, 167.0], [562.0, 162.0], [560.0, 164.0], [573.0, 160.0], [572.0, 163.0], [566.0, 170.0], [567.0, 157.0], [548.0, 170.0], [580.0, 164.0], [583.0, 162.0], [591.0, 150.0], [579.0, 161.0], [586.0, 154.0], [577.0, 171.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 591.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 113.0, "minX": 169.0, "maxY": 277.5, "series": [{"data": [[169.0, 221.0], [263.0, 113.0], [367.0, 255.0], [352.0, 277.5], [381.0, 256.0], [379.0, 266.0], [392.0, 252.0], [397.0, 241.0], [395.0, 248.0], [396.0, 250.5], [398.0, 243.0], [387.0, 254.0], [412.0, 234.0], [415.0, 223.0], [402.0, 243.0], [411.0, 237.0], [414.0, 242.0], [408.0, 241.0], [413.0, 239.0], [401.0, 242.0], [405.0, 236.0], [407.0, 239.0], [403.0, 239.5], [419.0, 228.0], [416.0, 231.5], [420.0, 233.5], [418.0, 233.0], [425.0, 225.0], [426.0, 229.0], [427.0, 230.0], [424.0, 232.0], [421.0, 233.0], [423.0, 221.0], [422.0, 233.0], [429.0, 224.0], [430.0, 222.0], [428.0, 228.0], [431.0, 234.0], [417.0, 232.0], [433.0, 225.0], [437.0, 224.0], [436.0, 226.0], [435.0, 227.0], [434.0, 223.0], [444.0, 217.0], [445.0, 222.0], [446.0, 217.0], [438.0, 217.0], [432.0, 221.0], [439.0, 228.0], [447.0, 220.0], [441.0, 221.5], [440.0, 218.0], [442.0, 215.0], [443.0, 222.0], [461.0, 212.0], [457.0, 215.0], [455.0, 215.0], [448.0, 229.0], [460.0, 203.5], [450.0, 233.0], [451.0, 212.0], [449.0, 216.0], [456.0, 215.0], [452.0, 210.0], [453.0, 213.0], [462.0, 212.0], [458.0, 213.0], [463.0, 208.0], [454.0, 212.0], [465.0, 210.0], [479.0, 204.0], [475.0, 204.0], [472.0, 203.0], [473.0, 202.0], [474.0, 200.0], [468.0, 209.0], [470.0, 202.0], [469.0, 209.0], [466.0, 205.0], [467.0, 207.0], [478.0, 197.0], [477.0, 202.0], [476.0, 201.0], [471.0, 209.0], [464.0, 213.0], [492.0, 194.0], [480.0, 202.0], [481.0, 202.0], [487.0, 200.0], [488.0, 199.0], [493.0, 192.0], [490.0, 199.0], [489.0, 195.0], [491.0, 199.0], [495.0, 197.0], [494.0, 198.0], [483.0, 197.0], [482.0, 199.0], [486.0, 198.0], [484.0, 199.0], [485.0, 208.0], [497.0, 194.0], [500.0, 200.0], [502.0, 193.0], [501.0, 189.0], [505.0, 191.0], [504.0, 194.0], [511.0, 181.0], [496.0, 191.0], [506.0, 189.0], [507.0, 188.0], [503.0, 193.0], [509.0, 192.0], [510.0, 194.5], [508.0, 192.0], [499.0, 191.0], [498.0, 197.0], [537.0, 184.0], [512.0, 189.5], [529.0, 182.0], [521.0, 189.0], [520.0, 188.0], [522.0, 183.0], [523.0, 181.0], [524.0, 183.0], [516.0, 186.0], [513.0, 182.0], [515.0, 188.0], [514.0, 192.0], [532.0, 170.0], [530.0, 179.0], [531.0, 177.0], [534.0, 174.0], [533.0, 170.0], [535.0, 168.0], [527.0, 185.0], [525.0, 184.0], [526.0, 185.0], [541.0, 175.0], [538.0, 168.0], [539.0, 177.0], [540.0, 182.0], [543.0, 175.0], [528.0, 181.0], [536.0, 179.0], [519.0, 186.0], [517.0, 185.0], [518.0, 186.0], [549.0, 166.0], [546.0, 174.0], [558.0, 173.5], [557.0, 186.0], [554.0, 173.0], [553.0, 181.0], [552.0, 176.0], [555.0, 173.0], [564.0, 163.0], [565.0, 172.0], [545.0, 168.0], [544.0, 163.0], [559.0, 168.0], [563.0, 172.0], [569.0, 155.0], [550.0, 178.0], [568.0, 167.0], [551.0, 170.0], [561.0, 167.0], [562.0, 162.0], [560.0, 164.0], [573.0, 160.0], [572.0, 163.0], [566.0, 170.0], [567.0, 157.0], [548.0, 170.0], [580.0, 164.0], [583.0, 162.0], [591.0, 150.0], [579.0, 161.0], [586.0, 154.0], [577.0, 171.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 591.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 48.61666666666667, "minX": 1.61979666E12, "maxY": 511.5, "series": [{"data": [[1.61979696E12, 490.96666666666664], [1.61979666E12, 48.61666666666667], [1.61979714E12, 501.48333333333335], [1.61979684E12, 469.4], [1.61979702E12, 511.5], [1.61979672E12, 502.15], [1.6197972E12, 455.9], [1.6197969E12, 470.43333333333334], [1.61979708E12, 481.15], [1.61979726E12, 448.1], [1.61979678E12, 492.71666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61979726E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 46.95, "minX": 1.61979666E12, "maxY": 511.5, "series": [{"data": [[1.61979696E12, 490.96666666666664], [1.61979666E12, 46.95], [1.61979714E12, 501.48333333333335], [1.61979684E12, 469.4], [1.61979702E12, 511.5], [1.61979672E12, 502.15], [1.6197972E12, 455.9166666666667], [1.6197969E12, 470.43333333333334], [1.61979708E12, 481.15], [1.61979726E12, 449.75], [1.61979678E12, 492.71666666666664]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61979726E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 46.95, "minX": 1.61979666E12, "maxY": 511.5, "series": [{"data": [[1.61979696E12, 490.96666666666664], [1.61979666E12, 46.95], [1.61979714E12, 501.48333333333335], [1.61979684E12, 469.4], [1.61979702E12, 511.5], [1.61979672E12, 502.15], [1.6197972E12, 455.9166666666667], [1.6197969E12, 470.43333333333334], [1.61979708E12, 481.15], [1.61979726E12, 449.75], [1.61979678E12, 492.71666666666664]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61979726E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 46.95, "minX": 1.61979666E12, "maxY": 511.5, "series": [{"data": [[1.61979696E12, 490.96666666666664], [1.61979666E12, 46.95], [1.61979714E12, 501.48333333333335], [1.61979684E12, 469.4], [1.61979702E12, 511.5], [1.61979672E12, 502.15], [1.6197972E12, 455.9166666666667], [1.6197969E12, 470.43333333333334], [1.61979708E12, 481.15], [1.61979726E12, 449.75], [1.61979678E12, 492.71666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61979726E12, "title": "Total Transactions Per Second"}},
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

