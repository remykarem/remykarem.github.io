import React from 'react';

export const ExampleSection = () => {
    return (
        <div>
            <h2>Examples</h2>

            <table className="threeCol">
                {/* <table style="overflow-x:auto;" class="threeCol"> */}
                <tr>
                    <th>Wrong</th>
                    <th>Correct</th>
                    <th>Arabic</th>
                </tr>
                <tr>
                    <td>almasjid</td>
                    <td>al-masjid</td>
                    <td>المَسجِد</td>
                </tr>
                <tr>
                    <td>assalaamualaikum</td>
                    <td>as-salaamu 3alaikum</td>
                    <td>السَّلَامُ عَلَيْكُم </td>
                </tr>
                <tr>
                    <td>alhamdulillah</td>
                    <td>al-7amdu lillah</td>
                    <td>الحَمدُ لله
                    </td>
                </tr>
                <tr>
                    <td>shukran</td>
                    <td>shukraN</td>
                    <td>شُكرًا</td>
                </tr>
                <tr>
                    <td>madrasa / madrasah</td>
                    <td>madrasat"</td>
                    <td>مَدرَسَة</td>
                </tr>
            </table>

            <h2>Special Characters</h2>

            <table className="threeCol">
                {/* <table class="threeCol" style="overflow-x:auto;"> */}
                <tr>
                    <th>Property</th>
                    <th>Symbol</th>
                    <th>Usage</th>
                    <th>Without symbol</th>
                    <th>With symbol</th>
                </tr>
                <tr>
                    <td>alif maq9oura</td>
                    <td>^</td>
                    <td>3alaa^</td>
                    <td>عَلَا</td>
                    <td>عَلَى</td>
                </tr>
                <tr>
                    <td>taa2 marbuTa</td>
                    <td>t"</td>
                    <td>madrasat"</td>
                    <td>مَدرَسَت</td>
                    <td>مَدرَسَة</td>
                </tr>
                <tr>
                    <td>silent alef</td>
                    <td>|</td>
                    <td>kafarou|</td>
                    <td>كَفَرُو</td>
                    <td>كَفَرُوا</td>
                </tr>
                <tr>
                    <td>sukoon</td>
                    <td>*</td>
                    <td>em*ti7aan</td>
                    <td>اِمتِحَان</td>
                    <td>اِمْتِحَان</td>
                </tr>
            </table>

            <h2>Special Consonants to Remember</h2>

            <table>
                {/* <table style="overflow-x:auto;"> */}
                <tr>
                    <th>Romanised</th>
                    <th>Arabic</th>
                </tr>
                <tr>
                    <td>t'</td>
                    <td>ث</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>ح</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>خ</td>
                </tr>
                <tr>
                    <td>dz / d'</td>
                    <td>ذ</td>
                </tr>
                <tr>
                    <td>s'</td>
                    <td>ش</td>
                </tr>
                <tr>
                    <td>9 / S</td>
                    <td>ص</td>
                </tr>
                <tr>
                    <td>9'</td>
                    <td>ض</td>
                </tr>
                <tr>
                    <td>T</td>
                    <td>ط</td>
                </tr>
                <tr>
                    <td>Z</td>
                    <td>ظ</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>ع</td>
                </tr>
                <tr>
                    <td>gh / 3'</td>
                    <td>غ</td>
                </tr>
                <tr>
                    <td>t"</td>
                    <td>ة</td>
                </tr>
            </table>
        </div>
    );
}