import re
import random

with open('shoes.html', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_price(match):
    price = f"${random.randint(7, 25) * 10 - 0.01:.2f}"
    # match.group() is the </h3>
    # we want to insert <p class="price">price</p> right after it
    # taking into account indentation, let's just add it on the next line
    return f'{match.group(0)}\n                    <p class="price">{price}</p>'

# The cards look like:
# <h3>...</h3>
# We only want to replace in #content div. Let's just find all <h3>...</h3> inside content, or just all <h3> inside shoes.html since it seems they are only in cards.
# Wait, let's make sure <h3> is only used for cards.
# Wait, let's find the closing </h3> and check the lines.
content = re.sub(r'</h3>', replace_price, content)

with open('shoes.html', 'w', encoding='utf-8') as f:
    f.write(content)
