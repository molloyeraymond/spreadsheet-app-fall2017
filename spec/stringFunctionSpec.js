describe("String functions", function() {
  it("returns the length of a string correctly", function() {
    expect(len("")).toBe(0);
    expect(len("abc")).toBe(3);
    expect(len("Foo 123!")).toBe(8);
  });
  it("title for next test", function() {
    expect(2+2).toBe(4);
  });
  it("title for next next test", function() {
    expect(2+2).not.toBe(3);
  });
  it("returns the concatenation of two strings of text together", function() {
    expect(concatenate("o","range")).toBe("orange")
  });
  it("returns the first numChars of the text", function(){
    expect(left("Sale Price",4)).toBe("Sale");
  });
  it("returns the last numChars of the text", function(){
    expect(right("fruit",2)).toBe("it");
  });
  it("returns the position of the beginning of the first occurance of findText within the text startting at numChars of the text", function() {
    expect(find("M","Miriam McGovern")).toBe(1);
  });
  it("returns the position of the beginning of the first occurrence of findText within the text withinText, starting at startNum numChars of text", function() {
    expect(search("day","holiday",1)).toBe(5)
  });
  it("returns the substring of characters of text, starting at position startNum , that's numChars many characters long", function() {
    expect(mid("Fluid Flow",1,5)).toBe("Fluid")
  })
  it("returns the new text with the replaced text inserted in", function() {
    expect(replace("2009",2,3,"10")).toBe("2010")
  })
  it("returns the string before the index of a certain text", function() {
    expect(beforeSubstring("Molloy College", " Col")).toBe("Molloy")
  })
  it("returns the string after the index of a certain text", function() {
    expect(afterSubstring("New School", "New")).toBe("School")
  })
  it("returns the string after the number of first characters are removed", function() {
    expect(removeFirstChars("Molloy123!", 6)).toBe("123!")
  })
  it("returns the string after the number of last characters are removed", function() {
    expect(removeLastChars("Molloy123!", 6)).toBe("Moll")
  })
  it("returns the string after the removal of the number of first and last characters", function() {
    expect(removeFirstAndLastChars("Molloy123!", 2)).toBe("lloy12")
  })
  it("returns the string after the rmeoval of the first and last characters", function() {
    expect(removeEnds("Molloy123!")).toBe("olloy123")
  })
  it("returns the name of the function", function() {
    expect(getFunctionName("QUOTIENT(14,2")).toBe("QUOTIENT")
  })
  it("returns the list of arguments after the removal of the number of arguments", function() {
    expect(removeArgs(3,"\"foo\",12345,\"bar\",\"molloy\",\"A2\"")).toBe("\"molloy\",\"A2\"")
  })
})