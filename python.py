# 1 day

developer1 = {
'Name': 'Kseniya',  'City': 'Odessa', 'Skill': 'Python', 'Rate': 600,'Phone': '+380631234573'}
developer2 = {'Name':'Peter','City': 'Kyiv','Skill': 'Python','Rate': 1800,'Phone': '+380631234567'}
developer3 = {'Name': 'Vlad',  'City': 'Kyiv', 'Skill': 'Python', 'Rate': 1300, 'Phone': '+380631234570'}
developer4 = {'Name': 'Ivan',  'City': 'Kyiv', 'Skill': 'Python', 'Rate': 2800, 'Phone': '+380631234572'}
developer5 = {'Name': 'Alex',  'City': 'Lviv', 'Skill': 'Python', 'Rate': 4800, 'Phone': '+380631234574'}

devs = [developer1, developer2, developer3, developer4, developer5]


def get_rate_stat(developers):
    rates = []
    stat = {"mean": None, "min": None, "max": None, "item_number": 0}
    
    for developer in developers:
        rate = developer["Rate"]
        rates.append(rate)

    stat.update(
      {
        "mean":sum(rates)/len(rates),
        "min":min(rates),
        "max":max(rates),
        "item_number":len(rates) 
  }
)
    return stat

# 2 day

class Developer:
    def __init__(self):
        self.fields = []

    def add(self, field_item):
        self.fields.append(field_item)  

    def delete(self, idx):
        idx = int(idx)
        self.fields.pop(idx)

    def update(self, idx, value):
        idx = int(idx)
        self.fields[idx] = value

class DataField:
    field_description = "General"

    def __init__(self, value):
        self.value = value

    def __str__(self):
        return f"{self.field_description}:{self.value}"

class FirstNameField(DataField):   
    field_description = "Name"   

class CityField(DataField):  
    field_description = "City"  

class SkillField(DataField): 
    field_description = "Skill" 

class PhoneField(DataField): 
    field_description = "Phone" 

class RateField(DataField): 
    field_description = "Rate" 


developer1 = Developer()
developer1.add(FirstNameField("Vlad"))
developer1.add(CityField("Kyiv"))
developer1.add(SkillField("Python"))
developer1.add(PhoneField("+3806312345670"))
developer1.add(RateField(1300))

developer2 = Developer()
developer2.add(FirstNameField("Max"))
developer2.add(CityField("Lviv"))
developer2.add(SkillField("Python"))
developer2.add(PhoneField("+3806312345671"))
developer2.add(RateField(1200))

developer3 = Developer()
developer3.add(FirstNameField("Ivan"))
developer3.add(CityField("Kyiv"))
developer3.add(SkillField("Python"))
developer3.add(PhoneField("+3806312345672"))
developer3.add(RateField(2800))

# 3 day