def grey_colors(black, white, count=10):
    start = black * 10
    end = white * 10
    interval = (end - start) // (count)
    return list(hex(x // 10) for x in range(start, end, interval))

c = grey_colors(0x2d, 0xf0)
print(len(c))
print(c)

