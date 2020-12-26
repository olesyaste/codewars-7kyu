function longest(s1, s2) {
    return new Set ((s1+s2).split('').sort()).join('')
  }
  
  longest("aretheyhere", "yestheyarehere")// "aehrsty")
  longest("loopingisfunbutdangerous", "lessdangerousthancoding")// "abcdefghilnoprstu")
  longest("inmanylanguages", "theresapairoffunctions")//"acefghilmnoprstuy")