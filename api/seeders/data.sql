insert into members(fname,lname,address1,city,state,zip,mobile,email,favbook1,favbook2,favbook3,aboutme,piclink,username)
values("Angelina","Jolie","18 Carson Drive","Los Angeles","CA","90003","408-211-6789","angie@yahoo.com","The Perfect Girl","The Road Less Travelled","Silent Wife","I am an American actress, filmmaker, and humanitarian. I have received an Academy Award, two Screen Actors Guild Awards, and three Golden Globe Awards, and have been cited as Hollywood's highest-paid actress.","aJolie.png","angie");
insert into  members(fname,lname,address1,city,state,zip,mobile,email,favbook1,favbook2,favbook3,aboutme,piclink,username)
values("Brad","Pitt","76 S. Brickyard Dr.","Los Angeles","CA","90003","425-787-8976","brad@gmail.com","The Affair","The Cabin","The Passenger","I have been cited as one of the most influential and powerful people in the American entertainment industry as well as the world's most attractive man by various media outlets. My personal life is also the subject of wide publicity.","bPitt.png","brad");
insert into  members(fname,lname,address1,city,state,zip,mobile,email,favbook1,favbook2,favbook3,aboutme,piclink,username)
values("Keanu","Reeves","1045 Glen Creek St.","Riverside","CA","92509","214-789-9867","kreeves@outlook.com","Ordinary Grace","This is where it ends","Out of mind","I began my acting career at the age of nine appearing in a theatre production of Damn Yankees. At 15, I played Mercutio in a stage production of Romeo and Juliet at the Leah Posluns Theatre. I dropped out of high school when I was 17. I obtained a green card through my American stepfather and moved to Los Angeles three years later.","kReeves.png","reeves");
insert into  members(fname,lname,address1,city,state,zip,mobile,email,favbook1,favbook2,favbook3,aboutme,piclink,username)
values("Jamie","Curtis","111 Main St","Beverely Hills","CA","90210","890-678-2345","jamie@hotmail.com","Freaky Friday","Cat in the Hat","How much I love you","My favorite ice cream is chocolate. I've lived in this neighborhood my whole life. My dad was a famous guy and I followed in his foot steps. I enjoy reading and I'm excited to connect with smart people.","jCurtis.png","jamie");

insert into events(notes,dt,memberId)
values("hosted by brad","2016-11-20 17:30:00",7);
insert into events(notes,dt,memberId)
values("hosted by angie","2016-12-12 18:00:00",6);
insert into events(notes,dt,memberId)
values("hosted by Keanu","2017-01-12 16:30:00",10);
insert into events(notes,dt,memberId)
values("hosted by jamie","2017-02-12 18:00:00",8);
insert into events(notes,dt,memberId)
values("hosted by Brad","2017-03-12 16:20:00",7);
insert into events(notes,dt,memberId)
values("hosted by angie","2017-04-12 17:15:00",6);




insert into books(title,eventId)
values("jungle book",7);
insert into books(title,eventId)
values("geetanjali",8);
insert into books(title,eventId)
values("ramayana",9);
insert into books(title,eventId)
values("gita",10);
insert into books(title,eventId)crypt
values("jataka tales",11);
insert into books(title,eventId)
values("amarchitra katha",12);


insert into posts(content,memberId)
values("angie has posted",6);
insert into posts(content,memberId)
values("Keanu has posted",10);
insert into posts(content,memberId)
values("jamie has posted",8);
insert into posts(content,memberId)
values("brad has posted",7);
insert into posts(content,memberId)
values("Keanu 2 has posted",10);
insert into posts(content,memberId)
values("jamie 2 has posted",8);


insert into ratings(stars,bookId,memberId)
values(3,1,3);
insert into ratings(stars,bookId,memberId)
values(3,1,1);
insert into ratings(stars,bookId,memberId)
values(4,1,2);
insert into ratings(stars,bookId,memberId)
values(5,1,4);
insert into ratings(stars,bookId,memberId)
values(4,2,2);
insert into ratings(stars,bookId,memberId)
values(5,2,3);


insert into rsvps(response,memberId,eventId)
values("yes",3,1);
insert into rsvps(response,memberId,eventId)
values("no",1,1);
insert into rsvps(response,memberId,eventId)
values("maybe",4,1);
insert into rsvps(response,memberId,eventId)
values("yes",2,1);
insert into rsvps(response,memberId,eventId)
values("no",5,1);
insert into rsvps(response,memberId,eventId)
values("maybe",3,2);
insert into rsvps(response,memberId,eventId)
values("yes",2,2);
insert into rsvps(response,memberId,eventId)
values("no",1,2);
insert into rsvps(response,memberId,eventId)
values("yes",5,2);





