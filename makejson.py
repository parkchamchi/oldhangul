import unicodedata
import json

jamo_ranges = [(0x1100, 0x11ff), (0xa960, 0xa97c), (0xd7b0, 0xd7c6), (0xd7cb, 0xd7fb)]

class Jamo:
	def __init__(self, ival, pos, members):
		self.ival = ival
		self.pos = pos
		self.members = members

		self.normalize_members()

	def __str__(self):
		return str(self.__dict__)
	
	def __repr__(self):
		return f"<Jamo {self.__str__()}>"
	
	def normalize_members(self):
		newmembers = []
		for member in self.members:
			toinsert = [member]
			if member.startswith("SSANG") or "CHITUEUMSSANG" in member or "CEONGCHIEUMSSANG" in member:
				c = member.replace("SSANG", "")
				toinsert = [c, c]

			newmembers += toinsert

		self.members = newmembers

class JamoSet:
	def __init__(self):
		self.jamo_dict = []
		self.count = 0

		for code_from, code_to in jamo_ranges:
			count = code_to - code_from + 1
			self.count += count
			self.jamo_dict.append((count, code_from))

	def get_ival(self, idx):
		if idx < 0 or idx >= self.count:
			raise ValueError(f"idx {idx} not in [0, ..., {self.count})")
		
		bucket = idx
		dict_i = 0
		while True:
			count_in_range, start = self.jamo_dict[dict_i]
			if bucket >= count_in_range:
				bucket -= count_in_range
				dict_i += 1
				continue

			return start + bucket
		
	@staticmethod
	def get_metadata(ival):
		cname = unicodedata.name(chr(ival))
		n0, n1, n2 = cname.split()

		assert n0 == "HANGUL"

		if n1 == "CHOSEONG":
			pos = 0
		elif n1 == "JUNGSEONG":
			pos = 1
		elif n1 == "JONGSEONG":
			pos = 2
		else:
			raise ValueError(f"Unknown n1: {n1}")
		
		members = n2.split('-')

		return Jamo(ival, pos, members)

	def get_all(self):
		out = []

		for i in range(jamoset.count):
			ival = self.get_ival(i)
			metadata = self.get_metadata(ival)
			out.append(metadata.__dict__)

		memset = set()
		for d in out:
			memset |= set(d["members"])

		memlist = list(memset)
		memlist.sort()

		newout = {"ref": memlist, 0: [], 1: [], 2: []}
		for d in out:
			ival, pos, members = d["ival"], d["pos"], d["members"]
			newout[pos].append({
				"ival": ival,
				"members": [memlist.index(m) for m in members],
			})

		return newout

jamoset = JamoSet()
d = jamoset.get_all()

with open("static/jamo.json", "wt", encoding="utf-8") as fout:
	json.dump(d, fout, indent='\t')