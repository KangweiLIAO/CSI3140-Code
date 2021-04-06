<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="5.0" />
    <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="A4_Q7_Liao_8568800.css" />
                <title>Question 7</title>
            </head>
            <body>
                <h2>
                    <xsl:value-of select="product/@name" />
                </h2>
                <table border="1" style="text-align: center;">
                    <tr>
                        <th> Serving size </th>
                        <td colspan="2">
                            <xsl:value-of select="product/servingSize" />
                            &#160;
                            <xsl:value-of select="product/servingSize/@unit" />
                        </td>
                    </tr>
                    <tr>
                        <th rowspan="{count(product/each/*)+1}">
                            Each
                            <xsl:value-of select="product/servingSize/@unit" />
                        </th>
                        <td colspan="2" bgcolor="coral" style="font-weight: bold; color: white;">
                            Nutritional Facts
                        </td>
                    </tr>
                    <xsl:for-each select="product/each/*">
                        <tr>
                            <th>
                                <xsl:value-of select="local-name()" />
                            </th>
                            <td>
                                <xsl:value-of select="." />
                                &#160;
                                <xsl:value-of select="./@unit" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>