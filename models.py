# models.py potentially to use to get model

class Mood(models.Model):
    sentiment = models.CharField(max_length=50)
                    # upload_to specifies which directory the images go to (django automatically creates a media directory)
    image = models.ImageField(upload_to='images/')
