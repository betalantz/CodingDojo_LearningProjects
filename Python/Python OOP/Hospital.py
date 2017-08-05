# creating the Patient class which will receive Patient data and create Patient instances
class Patient(object):
    def __init__(self, p_id, name, allergies=[], bed=None):
        self.p_id = p_id
        self.name = name
        self.allergies = allergies
        self.bed = bed
# testing whether all data received properly
    def info(self):
        print 'Patient ID: {} Name: {} Bed: {} Allergies: {}'.format(self.p_id, self.name, self.bed, self.allergies)
        return self


# creating the Hospital class which will receive Patient instances
class Hospital(object):
    def __init__(self, name, capacity, patients=[]):
        self.name = name
        self.capacity = capacity
        self.patients = patients
        self.beds = []
# creating beds equal to hospital capacity and setting them unoccupied (0)
        for bed in range(capacity):
            self.beds.append(0)

# testing if beds created
    def h_info(self):
        # print 'Welcome to {} Hospital, where we have a capacity of {}.'.format(self.name, self.capacity)
        # for i, bed in enumerate(self.beds):
        #     print i, bed
        for patient in (self.patients):
            patient.info()
        return self         

# method for admitting new patients
    def admit(self, patient):
        if (len(self.patients) < self.capacity):
            tempBed = 1
# find first empty bed, set it to occupied (1)
            for bed in range(len(self.beds)):
                if self.beds[bed] == 0:
                    tempBed = bed + 1
                    self.beds[bed] = 1
                    # print tempBed
                    # print self.beds[bed]
                    break
            self.patients.append(patient)
            patient.bed = tempBed
            print "Patient admitted."
            return self
        else:
            print "No admittance. Hospital at capacity."
            return self

# method for discharging patients
    def discharge(self, patient):
        res=self.patients.pop(self.patients.index(patient))
        self.beds[patient.bed-1] = 0
        patient.bed = None
        print "Patient {} discharged.".format(res.name)
        return self

h = Hospital('Overlake', 4)
p1 = Patient(1, 'Fred')
p2 = Patient(2, 'Alicia', 'penecillin, strawberries')
p3 = Patient(3, 'Felicia')
p4 = Patient(4, 'Felicity', 'gluten, sugar, H2O')
p5 = Patient(5, 'Og')
h.admit(p1).admit(p2).admit(p3).admit(p4).admit(p5)
h.h_info()
h.discharge(p2)
h.h_info().admit(p5)
h.h_info()