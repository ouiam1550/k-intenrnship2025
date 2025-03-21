<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/library">
<html> 
<body>
  <h1>Library books</h1>
  <xsl:for-each select="category">
    <h2><xsl:value-of select="@name"/></h2> 
    <table border="1" width="100%">
    <tr bgcolor="#9acd32" width="100%">
      <th style="text-align:left">Title</th>
      <th style="text-align:left">Author</th>
      <th style="text-align:left">Year</th>
      <th style="text-align:left">Rating</th>
    </tr>
    <xsl:for-each select="book">
        <xsl:sort select="year"/>
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="author"/></td>
      <td><xsl:value-of select="year"/></td>
      <td><xsl:value-of select="rating"/></td>
    </tr>
    </xsl:for-each>
  </table>
    </xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>