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
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 1215.0, "series": [{"data": [[0.0, 8.0], [0.1, 48.0], [0.2, 54.0], [0.3, 58.0], [0.4, 62.0], [0.5, 65.0], [0.6, 68.0], [0.7, 70.0], [0.8, 72.0], [0.9, 74.0], [1.0, 76.0], [1.1, 77.0], [1.2, 78.0], [1.3, 80.0], [1.4, 81.0], [1.5, 82.0], [1.6, 83.0], [1.7, 84.0], [1.8, 85.0], [1.9, 86.0], [2.0, 87.0], [2.1, 87.0], [2.2, 88.0], [2.3, 89.0], [2.4, 90.0], [2.5, 90.0], [2.6, 91.0], [2.7, 92.0], [2.8, 92.0], [2.9, 93.0], [3.0, 94.0], [3.1, 94.0], [3.2, 95.0], [3.3, 95.0], [3.4, 96.0], [3.5, 96.0], [3.6, 97.0], [3.7, 97.0], [3.8, 98.0], [3.9, 98.0], [4.0, 99.0], [4.1, 99.0], [4.2, 100.0], [4.3, 100.0], [4.4, 101.0], [4.5, 101.0], [4.6, 102.0], [4.7, 102.0], [4.8, 102.0], [4.9, 103.0], [5.0, 103.0], [5.1, 103.0], [5.2, 104.0], [5.3, 104.0], [5.4, 105.0], [5.5, 105.0], [5.6, 105.0], [5.7, 106.0], [5.8, 106.0], [5.9, 106.0], [6.0, 107.0], [6.1, 107.0], [6.2, 107.0], [6.3, 108.0], [6.4, 108.0], [6.5, 108.0], [6.6, 109.0], [6.7, 109.0], [6.8, 109.0], [6.9, 110.0], [7.0, 110.0], [7.1, 110.0], [7.2, 110.0], [7.3, 111.0], [7.4, 111.0], [7.5, 111.0], [7.6, 112.0], [7.7, 112.0], [7.8, 112.0], [7.9, 113.0], [8.0, 113.0], [8.1, 113.0], [8.2, 113.0], [8.3, 114.0], [8.4, 114.0], [8.5, 114.0], [8.6, 114.0], [8.7, 115.0], [8.8, 115.0], [8.9, 115.0], [9.0, 116.0], [9.1, 116.0], [9.2, 116.0], [9.3, 116.0], [9.4, 117.0], [9.5, 117.0], [9.6, 117.0], [9.7, 117.0], [9.8, 118.0], [9.9, 118.0], [10.0, 118.0], [10.1, 118.0], [10.2, 119.0], [10.3, 119.0], [10.4, 119.0], [10.5, 119.0], [10.6, 119.0], [10.7, 120.0], [10.8, 120.0], [10.9, 120.0], [11.0, 120.0], [11.1, 121.0], [11.2, 121.0], [11.3, 121.0], [11.4, 121.0], [11.5, 121.0], [11.6, 122.0], [11.7, 122.0], [11.8, 122.0], [11.9, 122.0], [12.0, 123.0], [12.1, 123.0], [12.2, 123.0], [12.3, 123.0], [12.4, 124.0], [12.5, 124.0], [12.6, 124.0], [12.7, 124.0], [12.8, 124.0], [12.9, 125.0], [13.0, 125.0], [13.1, 125.0], [13.2, 125.0], [13.3, 125.0], [13.4, 126.0], [13.5, 126.0], [13.6, 126.0], [13.7, 126.0], [13.8, 126.0], [13.9, 127.0], [14.0, 127.0], [14.1, 127.0], [14.2, 127.0], [14.3, 127.0], [14.4, 128.0], [14.5, 128.0], [14.6, 128.0], [14.7, 128.0], [14.8, 128.0], [14.9, 129.0], [15.0, 129.0], [15.1, 129.0], [15.2, 129.0], [15.3, 129.0], [15.4, 130.0], [15.5, 130.0], [15.6, 130.0], [15.7, 130.0], [15.8, 130.0], [15.9, 131.0], [16.0, 131.0], [16.1, 131.0], [16.2, 131.0], [16.3, 131.0], [16.4, 132.0], [16.5, 132.0], [16.6, 132.0], [16.7, 132.0], [16.8, 132.0], [16.9, 133.0], [17.0, 133.0], [17.1, 133.0], [17.2, 133.0], [17.3, 133.0], [17.4, 134.0], [17.5, 134.0], [17.6, 134.0], [17.7, 134.0], [17.8, 134.0], [17.9, 134.0], [18.0, 135.0], [18.1, 135.0], [18.2, 135.0], [18.3, 135.0], [18.4, 135.0], [18.5, 136.0], [18.6, 136.0], [18.7, 136.0], [18.8, 136.0], [18.9, 136.0], [19.0, 137.0], [19.1, 137.0], [19.2, 137.0], [19.3, 137.0], [19.4, 137.0], [19.5, 137.0], [19.6, 138.0], [19.7, 138.0], [19.8, 138.0], [19.9, 138.0], [20.0, 138.0], [20.1, 139.0], [20.2, 139.0], [20.3, 139.0], [20.4, 139.0], [20.5, 139.0], [20.6, 139.0], [20.7, 140.0], [20.8, 140.0], [20.9, 140.0], [21.0, 140.0], [21.1, 140.0], [21.2, 140.0], [21.3, 141.0], [21.4, 141.0], [21.5, 141.0], [21.6, 141.0], [21.7, 141.0], [21.8, 142.0], [21.9, 142.0], [22.0, 142.0], [22.1, 142.0], [22.2, 142.0], [22.3, 142.0], [22.4, 143.0], [22.5, 143.0], [22.6, 143.0], [22.7, 143.0], [22.8, 143.0], [22.9, 143.0], [23.0, 144.0], [23.1, 144.0], [23.2, 144.0], [23.3, 144.0], [23.4, 144.0], [23.5, 144.0], [23.6, 145.0], [23.7, 145.0], [23.8, 145.0], [23.9, 145.0], [24.0, 145.0], [24.1, 145.0], [24.2, 145.0], [24.3, 146.0], [24.4, 146.0], [24.5, 146.0], [24.6, 146.0], [24.7, 146.0], [24.8, 146.0], [24.9, 147.0], [25.0, 147.0], [25.1, 147.0], [25.2, 147.0], [25.3, 147.0], [25.4, 147.0], [25.5, 148.0], [25.6, 148.0], [25.7, 148.0], [25.8, 148.0], [25.9, 148.0], [26.0, 148.0], [26.1, 149.0], [26.2, 149.0], [26.3, 149.0], [26.4, 149.0], [26.5, 149.0], [26.6, 149.0], [26.7, 149.0], [26.8, 150.0], [26.9, 150.0], [27.0, 150.0], [27.1, 150.0], [27.2, 150.0], [27.3, 150.0], [27.4, 150.0], [27.5, 151.0], [27.6, 151.0], [27.7, 151.0], [27.8, 151.0], [27.9, 151.0], [28.0, 151.0], [28.1, 151.0], [28.2, 152.0], [28.3, 152.0], [28.4, 152.0], [28.5, 152.0], [28.6, 152.0], [28.7, 152.0], [28.8, 152.0], [28.9, 153.0], [29.0, 153.0], [29.1, 153.0], [29.2, 153.0], [29.3, 153.0], [29.4, 153.0], [29.5, 154.0], [29.6, 154.0], [29.7, 154.0], [29.8, 154.0], [29.9, 154.0], [30.0, 154.0], [30.1, 154.0], [30.2, 155.0], [30.3, 155.0], [30.4, 155.0], [30.5, 155.0], [30.6, 155.0], [30.7, 155.0], [30.8, 155.0], [30.9, 155.0], [31.0, 156.0], [31.1, 156.0], [31.2, 156.0], [31.3, 156.0], [31.4, 156.0], [31.5, 156.0], [31.6, 156.0], [31.7, 157.0], [31.8, 157.0], [31.9, 157.0], [32.0, 157.0], [32.1, 157.0], [32.2, 157.0], [32.3, 157.0], [32.4, 157.0], [32.5, 158.0], [32.6, 158.0], [32.7, 158.0], [32.8, 158.0], [32.9, 158.0], [33.0, 158.0], [33.1, 158.0], [33.2, 159.0], [33.3, 159.0], [33.4, 159.0], [33.5, 159.0], [33.6, 159.0], [33.7, 159.0], [33.8, 159.0], [33.9, 159.0], [34.0, 160.0], [34.1, 160.0], [34.2, 160.0], [34.3, 160.0], [34.4, 160.0], [34.5, 160.0], [34.6, 160.0], [34.7, 161.0], [34.8, 161.0], [34.9, 161.0], [35.0, 161.0], [35.1, 161.0], [35.2, 161.0], [35.3, 161.0], [35.4, 161.0], [35.5, 162.0], [35.6, 162.0], [35.7, 162.0], [35.8, 162.0], [35.9, 162.0], [36.0, 162.0], [36.1, 162.0], [36.2, 162.0], [36.3, 163.0], [36.4, 163.0], [36.5, 163.0], [36.6, 163.0], [36.7, 163.0], [36.8, 163.0], [36.9, 163.0], [37.0, 163.0], [37.1, 163.0], [37.2, 164.0], [37.3, 164.0], [37.4, 164.0], [37.5, 164.0], [37.6, 164.0], [37.7, 164.0], [37.8, 164.0], [37.9, 164.0], [38.0, 164.0], [38.1, 165.0], [38.2, 165.0], [38.3, 165.0], [38.4, 165.0], [38.5, 165.0], [38.6, 165.0], [38.7, 165.0], [38.8, 165.0], [38.9, 166.0], [39.0, 166.0], [39.1, 166.0], [39.2, 166.0], [39.3, 166.0], [39.4, 166.0], [39.5, 166.0], [39.6, 166.0], [39.7, 166.0], [39.8, 167.0], [39.9, 167.0], [40.0, 167.0], [40.1, 167.0], [40.2, 167.0], [40.3, 167.0], [40.4, 167.0], [40.5, 167.0], [40.6, 167.0], [40.7, 167.0], [40.8, 168.0], [40.9, 168.0], [41.0, 168.0], [41.1, 168.0], [41.2, 168.0], [41.3, 168.0], [41.4, 168.0], [41.5, 168.0], [41.6, 168.0], [41.7, 169.0], [41.8, 169.0], [41.9, 169.0], [42.0, 169.0], [42.1, 169.0], [42.2, 169.0], [42.3, 169.0], [42.4, 169.0], [42.5, 169.0], [42.6, 170.0], [42.7, 170.0], [42.8, 170.0], [42.9, 170.0], [43.0, 170.0], [43.1, 170.0], [43.2, 170.0], [43.3, 170.0], [43.4, 170.0], [43.5, 170.0], [43.6, 171.0], [43.7, 171.0], [43.8, 171.0], [43.9, 171.0], [44.0, 171.0], [44.1, 171.0], [44.2, 171.0], [44.3, 171.0], [44.4, 171.0], [44.5, 172.0], [44.6, 172.0], [44.7, 172.0], [44.8, 172.0], [44.9, 172.0], [45.0, 172.0], [45.1, 172.0], [45.2, 172.0], [45.3, 172.0], [45.4, 172.0], [45.5, 173.0], [45.6, 173.0], [45.7, 173.0], [45.8, 173.0], [45.9, 173.0], [46.0, 173.0], [46.1, 173.0], [46.2, 173.0], [46.3, 173.0], [46.4, 173.0], [46.5, 174.0], [46.6, 174.0], [46.7, 174.0], [46.8, 174.0], [46.9, 174.0], [47.0, 174.0], [47.1, 174.0], [47.2, 174.0], [47.3, 174.0], [47.4, 174.0], [47.5, 175.0], [47.6, 175.0], [47.7, 175.0], [47.8, 175.0], [47.9, 175.0], [48.0, 175.0], [48.1, 175.0], [48.2, 175.0], [48.3, 175.0], [48.4, 175.0], [48.5, 176.0], [48.6, 176.0], [48.7, 176.0], [48.8, 176.0], [48.9, 176.0], [49.0, 176.0], [49.1, 176.0], [49.2, 176.0], [49.3, 176.0], [49.4, 176.0], [49.5, 177.0], [49.6, 177.0], [49.7, 177.0], [49.8, 177.0], [49.9, 177.0], [50.0, 177.0], [50.1, 177.0], [50.2, 177.0], [50.3, 177.0], [50.4, 177.0], [50.5, 178.0], [50.6, 178.0], [50.7, 178.0], [50.8, 178.0], [50.9, 178.0], [51.0, 178.0], [51.1, 178.0], [51.2, 178.0], [51.3, 178.0], [51.4, 178.0], [51.5, 179.0], [51.6, 179.0], [51.7, 179.0], [51.8, 179.0], [51.9, 179.0], [52.0, 179.0], [52.1, 179.0], [52.2, 179.0], [52.3, 179.0], [52.4, 179.0], [52.5, 180.0], [52.6, 180.0], [52.7, 180.0], [52.8, 180.0], [52.9, 180.0], [53.0, 180.0], [53.1, 180.0], [53.2, 180.0], [53.3, 180.0], [53.4, 180.0], [53.5, 181.0], [53.6, 181.0], [53.7, 181.0], [53.8, 181.0], [53.9, 181.0], [54.0, 181.0], [54.1, 181.0], [54.2, 181.0], [54.3, 181.0], [54.4, 181.0], [54.5, 182.0], [54.6, 182.0], [54.7, 182.0], [54.8, 182.0], [54.9, 182.0], [55.0, 182.0], [55.1, 182.0], [55.2, 182.0], [55.3, 182.0], [55.4, 182.0], [55.5, 183.0], [55.6, 183.0], [55.7, 183.0], [55.8, 183.0], [55.9, 183.0], [56.0, 183.0], [56.1, 183.0], [56.2, 183.0], [56.3, 183.0], [56.4, 183.0], [56.5, 183.0], [56.6, 184.0], [56.7, 184.0], [56.8, 184.0], [56.9, 184.0], [57.0, 184.0], [57.1, 184.0], [57.2, 184.0], [57.3, 184.0], [57.4, 184.0], [57.5, 184.0], [57.6, 185.0], [57.7, 185.0], [57.8, 185.0], [57.9, 185.0], [58.0, 185.0], [58.1, 185.0], [58.2, 185.0], [58.3, 185.0], [58.4, 185.0], [58.5, 185.0], [58.6, 186.0], [58.7, 186.0], [58.8, 186.0], [58.9, 186.0], [59.0, 186.0], [59.1, 186.0], [59.2, 186.0], [59.3, 186.0], [59.4, 186.0], [59.5, 186.0], [59.6, 186.0], [59.7, 187.0], [59.8, 187.0], [59.9, 187.0], [60.0, 187.0], [60.1, 187.0], [60.2, 187.0], [60.3, 187.0], [60.4, 187.0], [60.5, 187.0], [60.6, 187.0], [60.7, 188.0], [60.8, 188.0], [60.9, 188.0], [61.0, 188.0], [61.1, 188.0], [61.2, 188.0], [61.3, 188.0], [61.4, 188.0], [61.5, 188.0], [61.6, 188.0], [61.7, 189.0], [61.8, 189.0], [61.9, 189.0], [62.0, 189.0], [62.1, 189.0], [62.2, 189.0], [62.3, 189.0], [62.4, 189.0], [62.5, 189.0], [62.6, 189.0], [62.7, 189.0], [62.8, 190.0], [62.9, 190.0], [63.0, 190.0], [63.1, 190.0], [63.2, 190.0], [63.3, 190.0], [63.4, 190.0], [63.5, 190.0], [63.6, 190.0], [63.7, 190.0], [63.8, 191.0], [63.9, 191.0], [64.0, 191.0], [64.1, 191.0], [64.2, 191.0], [64.3, 191.0], [64.4, 191.0], [64.5, 191.0], [64.6, 191.0], [64.7, 191.0], [64.8, 192.0], [64.9, 192.0], [65.0, 192.0], [65.1, 192.0], [65.2, 192.0], [65.3, 192.0], [65.4, 192.0], [65.5, 192.0], [65.6, 192.0], [65.7, 192.0], [65.8, 193.0], [65.9, 193.0], [66.0, 193.0], [66.1, 193.0], [66.2, 193.0], [66.3, 193.0], [66.4, 193.0], [66.5, 193.0], [66.6, 193.0], [66.7, 193.0], [66.8, 194.0], [66.9, 194.0], [67.0, 194.0], [67.1, 194.0], [67.2, 194.0], [67.3, 194.0], [67.4, 194.0], [67.5, 194.0], [67.6, 194.0], [67.7, 194.0], [67.8, 195.0], [67.9, 195.0], [68.0, 195.0], [68.1, 195.0], [68.2, 195.0], [68.3, 195.0], [68.4, 195.0], [68.5, 195.0], [68.6, 195.0], [68.7, 196.0], [68.8, 196.0], [68.9, 196.0], [69.0, 196.0], [69.1, 196.0], [69.2, 196.0], [69.3, 196.0], [69.4, 196.0], [69.5, 196.0], [69.6, 196.0], [69.7, 197.0], [69.8, 197.0], [69.9, 197.0], [70.0, 197.0], [70.1, 197.0], [70.2, 197.0], [70.3, 197.0], [70.4, 197.0], [70.5, 197.0], [70.6, 198.0], [70.7, 198.0], [70.8, 198.0], [70.9, 198.0], [71.0, 198.0], [71.1, 198.0], [71.2, 198.0], [71.3, 198.0], [71.4, 199.0], [71.5, 199.0], [71.6, 199.0], [71.7, 199.0], [71.8, 199.0], [71.9, 199.0], [72.0, 199.0], [72.1, 199.0], [72.2, 199.0], [72.3, 200.0], [72.4, 200.0], [72.5, 200.0], [72.6, 200.0], [72.7, 200.0], [72.8, 200.0], [72.9, 200.0], [73.0, 200.0], [73.1, 200.0], [73.2, 201.0], [73.3, 201.0], [73.4, 201.0], [73.5, 201.0], [73.6, 201.0], [73.7, 201.0], [73.8, 201.0], [73.9, 201.0], [74.0, 202.0], [74.1, 202.0], [74.2, 202.0], [74.3, 202.0], [74.4, 202.0], [74.5, 202.0], [74.6, 202.0], [74.7, 202.0], [74.8, 202.0], [74.9, 203.0], [75.0, 203.0], [75.1, 203.0], [75.2, 203.0], [75.3, 203.0], [75.4, 203.0], [75.5, 203.0], [75.6, 204.0], [75.7, 204.0], [75.8, 204.0], [75.9, 204.0], [76.0, 204.0], [76.1, 204.0], [76.2, 204.0], [76.3, 204.0], [76.4, 205.0], [76.5, 205.0], [76.6, 205.0], [76.7, 205.0], [76.8, 205.0], [76.9, 205.0], [77.0, 205.0], [77.1, 206.0], [77.2, 206.0], [77.3, 206.0], [77.4, 206.0], [77.5, 206.0], [77.6, 206.0], [77.7, 206.0], [77.8, 207.0], [77.9, 207.0], [78.0, 207.0], [78.1, 207.0], [78.2, 207.0], [78.3, 207.0], [78.4, 208.0], [78.5, 208.0], [78.6, 208.0], [78.7, 208.0], [78.8, 208.0], [78.9, 208.0], [79.0, 208.0], [79.1, 209.0], [79.2, 209.0], [79.3, 209.0], [79.4, 209.0], [79.5, 209.0], [79.6, 209.0], [79.7, 210.0], [79.8, 210.0], [79.9, 210.0], [80.0, 210.0], [80.1, 210.0], [80.2, 210.0], [80.3, 211.0], [80.4, 211.0], [80.5, 211.0], [80.6, 211.0], [80.7, 211.0], [80.8, 211.0], [80.9, 212.0], [81.0, 212.0], [81.1, 212.0], [81.2, 212.0], [81.3, 212.0], [81.4, 212.0], [81.5, 213.0], [81.6, 213.0], [81.7, 213.0], [81.8, 213.0], [81.9, 213.0], [82.0, 214.0], [82.1, 214.0], [82.2, 214.0], [82.3, 214.0], [82.4, 214.0], [82.5, 215.0], [82.6, 215.0], [82.7, 215.0], [82.8, 215.0], [82.9, 215.0], [83.0, 216.0], [83.1, 216.0], [83.2, 216.0], [83.3, 216.0], [83.4, 216.0], [83.5, 217.0], [83.6, 217.0], [83.7, 217.0], [83.8, 217.0], [83.9, 217.0], [84.0, 218.0], [84.1, 218.0], [84.2, 218.0], [84.3, 218.0], [84.4, 218.0], [84.5, 219.0], [84.6, 219.0], [84.7, 219.0], [84.8, 219.0], [84.9, 220.0], [85.0, 220.0], [85.1, 220.0], [85.2, 220.0], [85.3, 221.0], [85.4, 221.0], [85.5, 221.0], [85.6, 221.0], [85.7, 221.0], [85.8, 222.0], [85.9, 222.0], [86.0, 222.0], [86.1, 222.0], [86.2, 223.0], [86.3, 223.0], [86.4, 223.0], [86.5, 224.0], [86.6, 224.0], [86.7, 224.0], [86.8, 224.0], [86.9, 225.0], [87.0, 225.0], [87.1, 225.0], [87.2, 226.0], [87.3, 226.0], [87.4, 226.0], [87.5, 227.0], [87.6, 227.0], [87.7, 227.0], [87.8, 227.0], [87.9, 228.0], [88.0, 228.0], [88.1, 229.0], [88.2, 229.0], [88.3, 229.0], [88.4, 230.0], [88.5, 230.0], [88.6, 230.0], [88.7, 231.0], [88.8, 231.0], [88.9, 231.0], [89.0, 232.0], [89.1, 232.0], [89.2, 233.0], [89.3, 233.0], [89.4, 233.0], [89.5, 234.0], [89.6, 234.0], [89.7, 234.0], [89.8, 235.0], [89.9, 235.0], [90.0, 236.0], [90.1, 236.0], [90.2, 236.0], [90.3, 237.0], [90.4, 237.0], [90.5, 238.0], [90.6, 238.0], [90.7, 239.0], [90.8, 239.0], [90.9, 240.0], [91.0, 240.0], [91.1, 240.0], [91.2, 241.0], [91.3, 241.0], [91.4, 242.0], [91.5, 242.0], [91.6, 243.0], [91.7, 243.0], [91.8, 244.0], [91.9, 244.0], [92.0, 245.0], [92.1, 245.0], [92.2, 246.0], [92.3, 247.0], [92.4, 247.0], [92.5, 248.0], [92.6, 248.0], [92.7, 249.0], [92.8, 249.0], [92.9, 250.0], [93.0, 250.0], [93.1, 251.0], [93.2, 252.0], [93.3, 252.0], [93.4, 253.0], [93.5, 253.0], [93.6, 254.0], [93.7, 254.0], [93.8, 255.0], [93.9, 256.0], [94.0, 256.0], [94.1, 257.0], [94.2, 258.0], [94.3, 258.0], [94.4, 259.0], [94.5, 260.0], [94.6, 260.0], [94.7, 261.0], [94.8, 262.0], [94.9, 262.0], [95.0, 263.0], [95.1, 264.0], [95.2, 264.0], [95.3, 265.0], [95.4, 266.0], [95.5, 267.0], [95.6, 267.0], [95.7, 268.0], [95.8, 269.0], [95.9, 270.0], [96.0, 271.0], [96.1, 272.0], [96.2, 273.0], [96.3, 273.0], [96.4, 274.0], [96.5, 275.0], [96.6, 276.0], [96.7, 277.0], [96.8, 278.0], [96.9, 279.0], [97.0, 281.0], [97.1, 282.0], [97.2, 283.0], [97.3, 284.0], [97.4, 285.0], [97.5, 287.0], [97.6, 288.0], [97.7, 289.0], [97.8, 291.0], [97.9, 293.0], [98.0, 294.0], [98.1, 296.0], [98.2, 299.0], [98.3, 301.0], [98.4, 303.0], [98.5, 306.0], [98.6, 310.0], [98.7, 314.0], [98.8, 320.0], [98.9, 327.0], [99.0, 338.0], [99.1, 360.0], [99.2, 384.0], [99.3, 407.0], [99.4, 424.0], [99.5, 442.0], [99.6, 457.0], [99.7, 474.0], [99.8, 500.0], [99.9, 539.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 171362.0, "series": [{"data": [[0.0, 10388.0], [600.0, 59.0], [700.0, 4.0], [200.0, 65345.0], [800.0, 3.0], [900.0, 8.0], [1000.0, 7.0], [1100.0, 6.0], [300.0, 2566.0], [1200.0, 1.0], [100.0, 171362.0], [400.0, 1347.0], [500.0, 420.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 499.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 251017.0, "series": [{"data": [[0.0, 251017.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 499.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 74.38386194029854, "minX": 1.61969076E12, "maxY": 75.0, "series": [{"data": [[1.61969094E12, 75.0], [1.61969076E12, 74.65116915082727], [1.61969124E12, 75.0], [1.61969106E12, 75.0], [1.61969136E12, 74.38386194029854], [1.61969088E12, 75.0], [1.61969118E12, 75.0], [1.619691E12, 75.0], [1.61969082E12, 75.0], [1.6196913E12, 75.0], [1.61969112E12, 75.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61969136E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 38.66666666666667, "minX": 1.0, "maxY": 463.0, "series": [{"data": [[3.0, 439.5], [6.0, 101.0], [9.0, 142.66666666666666], [12.0, 112.33333333333333], [13.0, 102.0], [14.0, 128.0], [15.0, 75.125], [16.0, 74.85714285714286], [18.0, 38.66666666666667], [19.0, 49.4], [20.0, 96.0], [21.0, 61.0], [22.0, 114.66666666666667], [23.0, 74.83333333333333], [24.0, 62.16666666666667], [25.0, 104.25], [26.0, 86.42857142857143], [27.0, 69.6], [28.0, 118.0], [29.0, 70.0], [30.0, 129.2], [31.0, 94.5], [32.0, 86.125], [33.0, 113.0], [34.0, 108.33333333333333], [35.0, 87.5], [36.0, 72.87500000000001], [37.0, 141.0], [39.0, 107.0], [38.0, 158.0], [40.0, 98.33333333333333], [41.0, 119.41666666666667], [42.0, 96.33333333333333], [43.0, 106.85714285714286], [44.0, 127.54545454545453], [45.0, 115.5], [46.0, 140.33333333333334], [47.0, 160.0], [48.0, 113.55555555555556], [49.0, 102.66666666666667], [50.0, 108.0], [51.0, 96.0], [53.0, 157.0], [54.0, 136.0], [55.0, 130.6], [56.0, 150.0], [57.0, 141.0], [58.0, 166.33333333333334], [59.0, 136.25], [60.0, 150.0], [61.0, 141.33333333333334], [62.0, 162.25], [63.0, 160.6], [64.0, 180.0], [65.0, 176.57142857142856], [66.0, 154.33333333333334], [67.0, 149.25], [68.0, 155.66666666666666], [69.0, 158.23529411764707], [70.0, 169.7142857142857], [71.0, 185.0], [72.0, 175.35714285714283], [75.0, 178.82009714148919], [74.0, 174.7142857142857], [73.0, 139.0], [1.0, 463.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[74.95906821037174, 178.7482386806448]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 75.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11291.733333333334, "minX": 1.61969076E12, "maxY": 134081.86666666667, "series": [{"data": [[1.61969094E12, 120984.06666666667], [1.61969076E12, 111079.3], [1.61969124E12, 119332.85], [1.61969106E12, 125995.51666666666], [1.61969136E12, 21705.083333333332], [1.61969088E12, 128632.83333333333], [1.61969118E12, 127263.85], [1.619691E12, 128571.53333333334], [1.61969082E12, 134081.86666666667], [1.6196913E12, 130514.71666666666], [1.61969112E12, 124989.86666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61969094E12, 62947.2], [1.61969076E12, 57772.7], [1.61969124E12, 62078.2], [1.61969106E12, 65541.03333333334], [1.61969136E12, 11291.733333333334], [1.61969088E12, 66913.0], [1.61969118E12, 66207.26666666666], [1.619691E12, 66886.66666666667], [1.61969082E12, 69759.63333333333], [1.6196913E12, 67897.86666666667], [1.61969112E12, 65030.166666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61969136E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 163.8271921641791, "minX": 1.61969076E12, "maxY": 190.8584457453137, "series": [{"data": [[1.61969094E12, 188.13474732262435], [1.61969076E12, 171.75076348055933], [1.61969124E12, 190.8584457453137], [1.61969106E12, 180.87383984892918], [1.61969136E12, 163.8271921641791], [1.61969088E12, 177.08681621409], [1.61969118E12, 178.8897064672664], [1.619691E12, 177.04255905511852], [1.61969082E12, 169.87222075421906], [1.6196913E12, 174.4443841141789], [1.61969112E12, 182.1020854423965]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61969136E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 163.79897388059715, "minX": 1.61969076E12, "maxY": 190.82947314838336, "series": [{"data": [[1.61969094E12, 188.10814089692124], [1.61969076E12, 171.7199051916681], [1.61969124E12, 190.82947314838336], [1.61969106E12, 180.84647836393532], [1.61969136E12, 163.79897388059715], [1.61969088E12, 177.0625737898466], [1.61969118E12, 178.86154641635505], [1.619691E12, 177.0090944881885], [1.61969082E12, 169.84088935865168], [1.6196913E12, 174.41607198262332], [1.61969112E12, 182.07398258756788]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61969136E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.023986500060267604, "minX": 1.61969076E12, "maxY": 0.040995054924314045, "series": [{"data": [[1.61969094E12, 0.03296519410977237], [1.61969076E12, 0.04056702675600538], [1.61969124E12, 0.025833545431407444], [1.61969106E12, 0.023986500060267604], [1.61969136E12, 0.03964552238805981], [1.61969088E12, 0.027941755214482573], [1.61969118E12, 0.032932940895712345], [1.619691E12, 0.03114173228346469], [1.61969082E12, 0.040995054924314045], [1.6196913E12, 0.033237666770090046], [1.61969112E12, 0.033853006681514475]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61969136E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.61969076E12, "maxY": 1215.0, "series": [{"data": [[1.61969094E12, 1186.0], [1.61969076E12, 1002.0], [1.61969124E12, 942.0], [1.61969106E12, 861.0], [1.61969136E12, 1028.0], [1.61969088E12, 1150.0], [1.61969118E12, 972.0], [1.619691E12, 1215.0], [1.61969082E12, 1160.0], [1.6196913E12, 615.0], [1.61969112E12, 693.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61969094E12, 248.0], [1.61969076E12, 227.0], [1.61969124E12, 263.0], [1.61969106E12, 238.0], [1.61969136E12, 203.0], [1.61969088E12, 238.0], [1.61969118E12, 234.0], [1.619691E12, 227.0], [1.61969082E12, 220.0], [1.6196913E12, 220.0], [1.61969112E12, 251.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61969094E12, 352.9900000000016], [1.61969076E12, 389.9600000000064], [1.61969124E12, 320.0], [1.61969106E12, 354.9900000000016], [1.61969136E12, 383.0], [1.61969088E12, 318.9900000000016], [1.61969118E12, 323.9900000000016], [1.619691E12, 310.9900000000016], [1.61969082E12, 368.9600000000064], [1.6196913E12, 345.0], [1.61969112E12, 351.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61969094E12, 281.0], [1.61969076E12, 251.0], [1.61969124E12, 282.0], [1.61969106E12, 274.0], [1.61969136E12, 220.0], [1.61969088E12, 264.0], [1.61969118E12, 262.0], [1.619691E12, 248.0], [1.61969082E12, 243.0], [1.6196913E12, 236.0], [1.61969112E12, 272.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61969094E12, 20.0], [1.61969076E12, 28.0], [1.61969124E12, 21.0], [1.61969106E12, 8.0], [1.61969136E12, 42.0], [1.61969088E12, 27.0], [1.61969118E12, 28.0], [1.619691E12, 31.0], [1.61969082E12, 18.0], [1.6196913E12, 14.0], [1.61969112E12, 22.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61969094E12, 184.0], [1.61969076E12, 170.0], [1.61969124E12, 191.0], [1.61969106E12, 178.0], [1.61969136E12, 162.0], [1.61969088E12, 178.0], [1.61969118E12, 177.0], [1.619691E12, 174.0], [1.61969082E12, 166.5], [1.6196913E12, 172.0], [1.61969112E12, 183.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61969136E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 98.0, "minX": 170.0, "maxY": 230.0, "series": [{"data": [[170.0, 157.0], [213.0, 98.0], [326.0, 220.0], [333.0, 219.0], [321.0, 223.0], [320.0, 228.0], [323.0, 230.0], [343.0, 208.0], [351.0, 215.0], [345.0, 212.0], [340.0, 209.0], [349.0, 208.0], [337.0, 216.0], [346.0, 213.0], [365.0, 206.0], [358.0, 201.0], [356.0, 204.0], [366.0, 202.0], [360.0, 210.0], [367.0, 198.0], [354.0, 203.5], [353.0, 206.0], [359.0, 201.0], [361.0, 205.0], [362.0, 201.0], [363.0, 201.0], [357.0, 203.0], [370.0, 203.5], [377.0, 197.0], [376.0, 194.0], [383.0, 192.0], [378.0, 198.0], [379.0, 194.0], [382.0, 192.0], [371.0, 199.0], [374.0, 199.0], [372.0, 197.0], [373.0, 196.0], [375.0, 200.0], [368.0, 199.0], [369.0, 200.0], [381.0, 195.0], [380.0, 194.0], [397.0, 182.0], [396.0, 187.0], [387.0, 194.0], [386.0, 190.0], [399.0, 187.0], [393.0, 188.0], [392.0, 186.0], [398.0, 182.0], [394.0, 190.0], [395.0, 188.0], [388.0, 188.0], [390.0, 190.0], [389.0, 193.0], [385.0, 194.0], [384.0, 194.0], [391.0, 191.0], [401.0, 184.0], [408.0, 183.0], [413.0, 183.0], [410.0, 181.0], [411.0, 186.0], [406.0, 185.0], [404.0, 185.0], [405.0, 186.0], [409.0, 179.0], [415.0, 176.0], [414.0, 178.0], [402.0, 181.0], [412.0, 179.0], [403.0, 181.0], [407.0, 180.0], [400.0, 188.0], [417.0, 181.0], [424.0, 172.0], [421.0, 177.0], [429.0, 173.0], [428.0, 177.0], [431.0, 172.0], [430.0, 173.0], [418.0, 176.0], [419.0, 177.0], [426.0, 173.0], [425.0, 176.0], [427.0, 176.0], [420.0, 174.0], [416.0, 181.0], [423.0, 177.0], [422.0, 178.0], [434.0, 170.0], [447.0, 167.0], [441.0, 170.0], [446.0, 167.0], [432.0, 175.0], [433.0, 173.0], [440.0, 166.0], [443.0, 166.0], [442.0, 168.0], [445.0, 166.0], [435.0, 171.0], [444.0, 177.0], [436.0, 170.0], [437.0, 170.0], [439.0, 164.0], [438.0, 166.0], [460.0, 163.0], [452.0, 159.0], [453.0, 159.0], [454.0, 166.0], [456.0, 156.0], [463.0, 154.0], [448.0, 167.0], [449.0, 165.0], [451.0, 169.0], [450.0, 167.0], [459.0, 158.0], [455.0, 158.0], [457.0, 163.0], [458.0, 147.0], [461.0, 161.0], [462.0, 162.5], [476.0, 150.0], [472.0, 156.0], [464.0, 158.0], [471.0, 156.0], [479.0, 153.0], [467.0, 153.0], [465.0, 158.0], [469.0, 155.0], [468.0, 156.0], [470.0, 161.0], [478.0, 160.5], [477.0, 151.0], [475.0, 156.0], [473.0, 160.0], [495.0, 147.0], [480.0, 148.0], [489.0, 150.0], [484.0, 158.0], [487.0, 150.0], [485.0, 154.0], [490.0, 152.0], [491.0, 153.0], [482.0, 156.0], [481.0, 157.0], [492.0, 147.0], [497.0, 139.0], [498.0, 146.5], [496.0, 144.0], [502.0, 157.5], [501.0, 145.0], [508.0, 139.0], [516.0, 133.5], [517.0, 138.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 517.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 98.0, "minX": 170.0, "maxY": 230.0, "series": [{"data": [[170.0, 157.0], [213.0, 98.0], [326.0, 220.0], [333.0, 219.0], [321.0, 223.0], [320.0, 228.0], [323.0, 230.0], [343.0, 208.0], [351.0, 215.0], [345.0, 212.0], [340.0, 209.0], [349.0, 208.0], [337.0, 216.0], [346.0, 213.0], [365.0, 206.0], [358.0, 201.0], [356.0, 204.0], [366.0, 202.0], [360.0, 210.0], [367.0, 198.0], [354.0, 203.5], [353.0, 206.0], [359.0, 201.0], [361.0, 205.0], [362.0, 201.0], [363.0, 201.0], [357.0, 203.0], [370.0, 203.5], [377.0, 197.0], [376.0, 194.0], [383.0, 192.0], [378.0, 198.0], [379.0, 194.0], [382.0, 192.0], [371.0, 199.0], [374.0, 199.0], [372.0, 197.0], [373.0, 196.0], [375.0, 200.0], [368.0, 199.0], [369.0, 200.0], [381.0, 195.0], [380.0, 194.0], [397.0, 182.0], [396.0, 187.0], [387.0, 194.0], [386.0, 190.0], [399.0, 187.0], [393.0, 188.0], [392.0, 186.0], [398.0, 182.0], [394.0, 190.0], [395.0, 188.0], [388.0, 188.0], [390.0, 190.0], [389.0, 193.0], [385.0, 194.0], [384.0, 194.0], [391.0, 191.0], [401.0, 184.0], [408.0, 183.0], [413.0, 183.0], [410.0, 181.0], [411.0, 186.0], [406.0, 185.0], [404.0, 185.0], [405.0, 186.0], [409.0, 179.0], [415.0, 176.0], [414.0, 178.0], [402.0, 181.0], [412.0, 179.0], [403.0, 181.0], [407.0, 180.0], [400.0, 188.0], [417.0, 181.0], [424.0, 172.0], [421.0, 177.0], [429.0, 173.0], [428.0, 177.0], [431.0, 172.0], [430.0, 173.0], [418.0, 176.0], [419.0, 177.0], [426.0, 173.0], [425.0, 176.0], [427.0, 176.0], [420.0, 174.0], [416.0, 181.0], [423.0, 177.0], [422.0, 178.0], [434.0, 169.5], [447.0, 167.0], [441.0, 170.0], [446.0, 167.0], [432.0, 175.0], [433.0, 173.0], [440.0, 166.0], [443.0, 166.0], [442.0, 168.0], [445.0, 166.0], [435.0, 171.0], [444.0, 177.0], [436.0, 170.0], [437.0, 170.0], [439.0, 164.0], [438.0, 166.0], [460.0, 163.0], [452.0, 159.0], [453.0, 159.0], [454.0, 166.0], [456.0, 156.0], [463.0, 154.0], [448.0, 167.0], [449.0, 165.0], [451.0, 169.0], [450.0, 167.0], [459.0, 158.0], [455.0, 158.0], [457.0, 163.0], [458.0, 147.0], [461.0, 161.0], [462.0, 162.5], [476.0, 150.0], [472.0, 156.0], [464.0, 158.0], [471.0, 156.0], [479.0, 153.0], [467.0, 153.0], [465.0, 158.0], [469.0, 155.0], [468.0, 156.0], [470.0, 161.0], [478.0, 160.5], [477.0, 151.0], [475.0, 156.0], [473.0, 160.0], [495.0, 147.0], [480.0, 147.5], [489.0, 150.0], [484.0, 158.0], [487.0, 150.0], [485.0, 154.0], [490.0, 152.0], [491.0, 153.0], [482.0, 156.0], [481.0, 157.0], [492.0, 147.0], [497.0, 139.0], [498.0, 146.5], [496.0, 144.0], [502.0, 157.0], [501.0, 145.0], [508.0, 139.0], [516.0, 133.5], [517.0, 138.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 517.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 70.21666666666667, "minX": 1.61969076E12, "maxY": 441.5, "series": [{"data": [[1.61969094E12, 398.4], [1.61969076E12, 366.9], [1.61969124E12, 392.9], [1.61969106E12, 414.81666666666666], [1.61969136E12, 70.21666666666667], [1.61969088E12, 423.51666666666665], [1.61969118E12, 419.03333333333336], [1.619691E12, 423.3333333333333], [1.61969082E12, 441.5], [1.6196913E12, 429.73333333333335], [1.61969112E12, 411.5833333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61969136E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 71.46666666666667, "minX": 1.61969076E12, "maxY": 441.51666666666665, "series": [{"data": [[1.61969094E12, 398.4], [1.61969076E12, 365.65], [1.61969124E12, 392.9], [1.61969106E12, 414.81666666666666], [1.61969136E12, 71.46666666666667], [1.61969088E12, 423.5], [1.61969118E12, 419.03333333333336], [1.619691E12, 423.3333333333333], [1.61969082E12, 441.51666666666665], [1.6196913E12, 429.73333333333335], [1.61969112E12, 411.5833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61969136E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 71.46666666666667, "minX": 1.61969076E12, "maxY": 441.51666666666665, "series": [{"data": [[1.61969094E12, 398.4], [1.61969076E12, 365.65], [1.61969124E12, 392.9], [1.61969106E12, 414.81666666666666], [1.61969136E12, 71.46666666666667], [1.61969088E12, 423.5], [1.61969118E12, 419.03333333333336], [1.619691E12, 423.3333333333333], [1.61969082E12, 441.51666666666665], [1.6196913E12, 429.73333333333335], [1.61969112E12, 411.5833333333333]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61969136E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 71.46666666666667, "minX": 1.61969076E12, "maxY": 441.51666666666665, "series": [{"data": [[1.61969094E12, 398.4], [1.61969076E12, 365.65], [1.61969124E12, 392.9], [1.61969106E12, 414.81666666666666], [1.61969136E12, 71.46666666666667], [1.61969088E12, 423.5], [1.61969118E12, 419.03333333333336], [1.619691E12, 423.3333333333333], [1.61969082E12, 441.51666666666665], [1.6196913E12, 429.73333333333335], [1.61969112E12, 411.5833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61969136E12, "title": "Total Transactions Per Second"}},
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

