# Base64

Base64是用a-z、A-Z、0-9、"+"、"/"（还有填充用的"="，实际上是65个字符）作为一个基本字符集。把其他所有符号都转换成这个字符集中的字符。


### 编码 

可以分为如下几个过程

1.把字符串以每3个8bit的字符为一组

2.每组获取每个字符的ASCII编码

3.将ASCII编码转换成 8bit 的二进制，得到一组 3*8=24bit 的字节

4.再将这 24bit 划分为4个 6bit 的字节，并在每个 6bit 的字节前面都填两个高位0，得到4个 8bit 的字节

5.再将这4个8bit的字节转换成10进制，对照下面的Base64编码表

6.按照这种编码要求字符是 8bit 的，所以得限定在特定的编码范围内(\u0000-\u00ff)

7.最后如果被编码字符长度不是3的倍数的时候，则都用0代替，对应的输出字符为=

### 编码表

 <table style="text-align:center;margin: 1em 0; background-color: #f9f9f9; border: 1px solid #aaa; border-collapse: collapse;color: #000">
 <tbody><tr>
 <th scope="col">数值</th>
 <th scope="col">字符</th>
 <td rowspan="18">&nbsp;</td>
 <th scope="col">数值</th>
 <th scope="col">字符</th>
 <td rowspan="18">&nbsp;</td>
 <th scope="col">数值</th>
 <th scope="col">字符</th>
 <td rowspan="18">&nbsp;</td>
 <th scope="col">数值</th>
 <th scope="col">字符</th>
 </tr>
 <tr>
 <td>0</td>
 <td>A</td>
 <td>16</td>
 <td>Q</td>
 <td>32</td>
 <td>g</td>
 <td>48</td>
 <td>w</td>
 </tr>
 <tr>
 <td>1</td>
 <td>B</td>
 <td>17</td>
 <td>R</td>
 <td>33</td>
 <td>h</td>
 <td>49</td>
 <td>x</td>
 </tr>
 <tr>
 <td>2</td>
 <td>C</td>
 <td>18</td>
 <td>S</td>
 <td>34</td>
 <td>i</td>
 <td>50</td>
 <td>y</td>
 </tr>
 <tr>
 <td>3</td>
 <td>D</td>
 <td>19</td>
 <td>T</td>
 <td>35</td>
 <td>j</td>
 <td>51</td>
 <td>z</td>
 </tr>
 <tr>
 <td>4</td>
 <td>E</td>
 <td>20</td>
 <td>U</td>
 <td>36</td>
 <td>k</td>
 <td>52</td>
 <td>0</td>
 </tr>
 <tr>
 <td>5</td>
 <td>F</td>
 <td>21</td>
 <td>V</td>
 <td>37</td>
 <td>l</td>
 <td>53</td>
 <td>1</td>
 </tr>
 <tr>
 <td>6</td>
 <td>G</td>
 <td>22</td>
 <td>W</td>
 <td>38</td>
 <td>m</td>
 <td>54</td>
 <td>2</td>
 </tr>
 <tr>
 <td>7</td>
 <td>H</td>
 <td>23</td>
 <td>X</td>
 <td>39</td>
 <td>n</td>
 <td>55</td>
 <td>3</td>
 </tr>
 <tr>
 <td>8</td>
 <td>I</td>
 <td>24</td>
 <td>Y</td>
 <td>40</td>
 <td>o</td>
 <td>56</td>
 <td>4</td>
 </tr>
 <tr>
 <td>9</td>
 <td>J</td>
 <td>25</td>
 <td>Z</td>
 <td>41</td>
 <td>p</td>
 <td>57</td>
 <td>5</td>
 </tr>
 <tr>
 <td>10</td>
 <td>K</td>
 <td>26</td>
 <td>a</td>
 <td>42</td>
 <td>q</td>
 <td>58</td>
 <td>6</td>
 </tr>
 <tr>
 <td>11</td>
 <td>L</td>
 <td>27</td>
 <td>b</td>
 <td>43</td>
 <td>r</td>
 <td>59</td>
 <td>7</td>
 </tr>
 <tr>
 <td>12</td>
 <td>M</td>
 <td>28</td>
 <td>c</td>
 <td>44</td>
 <td>s</td>
 <td>60</td>
 <td>8</td>
 </tr>
 <tr>
 <td>13</td>
 <td>N</td>
 <td>29</td>
 <td>d</td>
 <td>45</td>
 <td>t</td>
 <td>61</td>
 <td>9</td>
 </tr>
 <tr>
 <td>14</td>
 <td>O</td>
 <td>30</td>
 <td>e</td>
 <td>46</td>
 <td>u</td>
 <td>62</td>
 <td>+</td>
 </tr>
 <tr>
 <td>15</td>
 <td>P</td>
 <td>31</td>
 <td>f</td>
 <td>47</td>
 <td>v</td>
 <td>63</td>
 <td>/</td>
 </tr>
 </tbody></table>
 
### 举个例子

对于编码 "Man" 来说转化关系如下

<table border="1"><tbody><tr><td style="padding:0px;">Text content</td><td style="padding:0px;" colspan="8" align="center"><b>M</b></td><td style="padding:0px;" colspan="8" align="center"><b>a</b></td><td style="padding:0px;" colspan="8" align="center"><b>n</b></td></tr><tr><td style="padding:0px;">ASCII</td><td style="padding:0px;" colspan="8" align="center">77</td><td style="padding:0px;" colspan="8" align="center">97</td><td style="padding:0px;" colspan="8" align="center">110</td></tr><tr><td style="padding:0px;">Bit pattern</td><td style="padding:0px;">0</td><td style="padding:0px;">1</td><td style="padding:0px;">0</td><td style="padding:0px;">0</td><td style="padding:0px;">1</td><td style="padding:0px;">1</td><td style="padding:0px;">0</td><td style="padding:0px;">1</td><td style="padding:0px;">0</td><td style="padding:0px;">1</td><td style="padding:0px;">1</td><td style="padding:0px;">0</td><td style="padding:0px;">0</td><td style="padding:0px;">0</td><td style="padding:0px;">0</td><td style="padding:0px;">1</td><td style="padding:0px;">0</td><td style="padding:0px;">1</td><td style="padding:0px;">1</td><td style="padding:0px;">0</td><td style="padding:0px;">1</td><td style="padding:0px;">1</td><td style="padding:0px;">1</td><td style="padding:0px;">0</td></tr><tr><td style="padding:0px;">Index</td><td style="padding:0px;" colspan="6" align="center">19</td><td style="padding:0px;" colspan="6" align="center">22</td><td style="padding:0px;" colspan="6" align="center">5</td><td style="padding:0px;" colspan="6" align="center">46</td></tr><tr><td style="padding:0px;">Base64-Encoded</td><td style="padding:0px;" colspan="6" align="center"><b>T</b></td><td style="padding:0px;" colspan="6" align="center"><b>W</b></td><td style="padding:0px;" colspan="6" align="center"><b>F</b></td><td style="padding:0px;" colspan="6" align="center"><b>u</b></td></tr></tbody></table>


1."M"、"a"、"n"的ASCII值分别是77、97、110，对应的二进制值是01001101、01100001、01101110，将它们连成一个24位的二进制字符串010011010110000101101110

2.将这个24位的二进制字符串分成4组，每组6个二进制位：010011、010110、000101、101110

3.在每组前面加两个00，扩展成32个二进制位，即四个字节：00010011、00010110、00000101、00101110。它们的十进制值分别是19、22、5、46

4.根据上表，得到每个值对应Base64编码，即T、W、F、u


### 补齐


如果要编码的字节数不能被3整除，最后会多出1个或2个字节，那么可以使用下面的方法进行处理：先使用0字节值在末尾补足，使其能够被3整除，然后再进行base64的编码。在编码后的base64文本后加上一个或两个'='号，代表补足的字节数。


当最后剩余一个八位字节（一个byte）时，最后一个6位的base64字节块有四位是0值，最后附加上两个等号；如果最后剩余两个八位字节（2个byte）时，最后一个6位的base字节块有两位是0值，最后附加一个等号


<table style="text-align:center;margin: 1em 0; background-color: #f9f9f9; border: 1px solid #aaa; border-collapse: collapse;color: #000">
 <tbody><tr>
<th scope="row">文本（1 Byte）</th>
<td colspan="8" align="center"><b>A</b></td>
<td colspan="8" align="center"></td>
<td colspan="8" align="center"></td>
</tr>
<tr>
<th scope="row">二进制位</th>
<td>0</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<th scope="row">二进制位（补0）</th>
<td>0</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td><b>0</b></td>
<td><b>0</b></td>
<td><b>0</b></td>
<td><b>0</b></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<th scope="row">Base64编码</th>
<td colspan="6" align="center"><b>Q</b></td>
<td colspan="6" align="center"><b>Q</b></td>
<td colspan="6" align="center"></td>
<td colspan="6" align="center"></td>
</tr>
<tr>
<th scope="row">文本（2 Byte）</th>
<td colspan="8" align="center"><b>B</b></td>
<td colspan="8" align="center"><b>C</b></td>
<td colspan="8" align="center"></td>
</tr>
<tr>
<th scope="row">二进制位</th>
<td>0</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td></td>
<td></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
</tr>
<tr>
<th scope="row">二进制位（补0）</th>
<td>0</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td><b>0</b></td>
<td><b>0</b></td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
<td>x</td>
</tr>
<tr>
<th scope="row">Base64编码</th>
<td colspan="6" align="center"><b>Q</b></td>
<td colspan="6" align="center"><b>k</b></td>
<td colspan="6" align="center"><b>M</b></td>
<td colspan="6" align="center"></td>
</tr>
</tbody></table>


举例如一个字母 m 来看，取第一个后变成了 010011|01，需要先将第二个字符后面补4个0变成 010011|010000 然后再填充两个 ==，最后就变成了 bQ==

对于 ma，分别是 0	10011|010110|0001，需要现将后面的补2个0变成 010011|010110|000100 然后填充一个 =，最后变成了 bWE=

### 代码实现

```js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

function _btoa(s) {
    // 仅支持 8bit
    if (/([^\u0000-\u00ff])/.test(s)) {
        throw new Error('INVALID_CHARACTER_ERR');
    }
    var i = 0,
        prev,
        code,
        mod,
        res = [];
   
    // 每个字符遍历
    while (i < s.length) {
        // 得到 ASCII 值
        code = s.charCodeAt(i);
        mod = i % 3;
        
        // 分成4组，对于每组进行处理
        switch (mod) {
            case 0:
                // 对于第一个字符来说，只需要在前面加 00 变成6位就可以了，>> 2 左移两位取前六位
                res.push(chars.charAt(code >> 2));
                break;
            case 1:
                // 第二个字符是上个字符剩余的2位并左移到高位((prev & 3) << 4) + 第二个字符的前4位(code >> 4)组成新的6位
                res.push(chars.charAt((prev & 3) << 4 | (code >> 4)));
                break;
            case 2:
                // 第三个字符 = 第二个8位的后4位((prev & 0x0f) << 2) + 第三个8位的前2位((code >> 6)) 
                res.push(chars.charAt((prev & 0x0f) << 2 | (code >> 6)));
                // 第四个字符 = 第三个8位的后6位(code & 0x3f)
                res.push(chars.charAt(code & 0x3f));
                break;
        }
        // 记录上个字符，进入下次循环
        prev = code;
        i++;
    }

    // 循环完成后补齐
    if (mod == 0) {
        // mod 为0(假想下只有一个字母的时候) 需要补充3个6位，第一个为最后一个8位的最后两位后面补4个0。另外两个6位为 ==
        res.push(chars.charAt((prev & 3) << 4));
        res.push('==');
        // mod 为1就(假想下只有两个字母的时候) 还需补两个6位，一个是最后一个8位的后4位补两个0，另一个对应 =
    } else if (mod == 1) {
        res.push(chars.charAt((prev & 0x0f) << 2));
        res.push('=');
    }

    return res.join('');
}

function _atob(s) {
 // 原理类似，不再详述
}

```

### 参考

[Wiki](https://zh.wikipedia.org/wiki/Base64)
[Base64在线转换](http://www.mxcz.net/tools/base64.aspx)
[C实现](http://base64.sourceforge.net/)
[Java实现](http://iharder.sourceforge.net/current/java/base64/)
