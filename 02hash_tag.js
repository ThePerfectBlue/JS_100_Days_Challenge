function generateTag(tags) {
  if (tags.length > 280 || tags.trim().length === 0) {
    return false;
  }

  tags = tags.split(" ");
  tags = tags.map((tag) => tag.replace(tag[0], tag[0].toUpperCase()));
  tags = `#${tags.join("")}`; // by default "," milta hei

  return tags;
}

console.log(generateTag("my name is lakhan"));
