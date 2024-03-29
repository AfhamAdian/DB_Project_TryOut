INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (1, 'John Doe', 'password123', 'john@example.com', 123456789012345, 'CU');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (2, 'Jane Smith', 'securepass', 'jane@example.com', 987654321098765, 'AD');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (3, 'Toyota', 'pass1234', 'toyota@example.com', 555555555555555, 'CO');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (4, 'Alice Brown', 'password5678', 'alice@example.com', 999999999999999, 'AD');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (5, 'Charlie Lee', 'abc12345', 'charlie@example.com', 111111111111111, 'CU');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (6, 'Eva Williams', 'eva12345', 'eva@example.com', 777777777777777, 'CU');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (8, 'Michael Davis', 'mike23456', 'michael@example.com', 666666666666666, 'CU');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (10, 'Sophie Miller', 'sophie33789', 'sophie@example.com', 555235555555555, 'CU');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (12, 'David Wilson', 'david56732', 'david@example.com', 444444444444444, 'CU');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (14, 'Olivia Harris', 'olivia32221', 'olivia@example.com', 333333333333333, 'CU');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (15, 'Volkswagen', 'co1232', 'volkswagen@example.com', 121111111111111, 'CO');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (16, 'Ford', 'co456', 'ford@example.com', 222222222222222, 'CO');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (17, 'Chevrolet', 'co789', 'chevrolet@example.com', 333133333333333, 'CO');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (18, 'Honda', 'co25434', 'honda@example.com', 414444444444444, 'CO');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (19, 'BMW', 'co56237', 'bmw@example.com', 515555555555555, 'CO');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (20, 'adian', 'adianpass', 'janet@example.com', 98765431098765, 'AD');
INSERT INTO users (ID, NAME, PASSWORD, EMAIL, PHONE_NUMBER, USER_TYPE)
VALUES (21, 'abdullah', 'abdullahpass', 'janets@example.com', 187654321098765, 'AD');


INSERT INTO admin (ID)
VALUES (2);
INSERT INTO admin (ID)
VALUES (4);
INSERT INTO admin (ID)
VALUES (20);
INSERT INTO admin (ID)
VALUES (21);

INSERT INTO company (ID, COMPANY_URL, RATING)
VALUES (3, 'https://www.toyota.com', 4.5);
INSERT INTO company (ID, COMPANY_URL, RATING)
VALUES (15, 'https://www.vw.com/en.html', 4.0);
INSERT INTO company (ID, COMPANY_URL, RATING)
VALUES (16, 'https://www.ford.com', 3.9);
INSERT INTO company (ID, COMPANY_URL, RATING)
VALUES (17, 'https://www.chevrolet.com/', 4.2);
INSERT INTO company (ID, COMPANY_URL, RATING)
VALUES (18, 'https://www.honda.com', 3.8);
INSERT INTO company (ID, COMPANY_URL, RATING)
VALUES (19, 'https://www.bmw.com/en/index.html', 4);


INSERT INTO customer (ID, ACCOUNT_CREATED_ON)	VALUES (1, SYSDATE);
INSERT INTO customer (ID, ACCOUNT_CREATED_ON)	VALUES (5, SYSDATE);
INSERT INTO customer (ID, ACCOUNT_CREATED_ON)	VALUES (6, SYSDATE);
INSERT INTO customer (ID, ACCOUNT_CREATED_ON)	VALUES (8, SYSDATE);
INSERT INTO customer (ID, ACCOUNT_CREATED_ON)	VALUES (10, SYSDATE);
INSERT INTO customer (ID, ACCOUNT_CREATED_ON)	VALUES (12, SYSDATE);
INSERT INTO customer (ID, ACCOUNT_CREATED_ON)	VALUES (14, SYSDATE);


INSERT INTO CARTYPE(TYPE_ID,TYPE_NAME,CAR_TYPE_URL) VALUES('MMPV','MINI MPV','https://en.wikipedia.org/wiki/Mini_MPV');
INSERT INTO CARTYPE(TYPE_ID,TYPE_NAME,CAR_TYPE_URL) VALUES('CMPV','COMPACT MPV','https://en.wikipedia.org/wiki/Compact_MPV');
INSERT INTO CARTYPE(TYPE_ID,TYPE_NAME,CAR_TYPE_URL) VALUES('SUV','SPORTS UTILITY VEHICLE','https://en.wikipedia.org/wiki/SUV');
INSERT INTO CARTYPE(TYPE_ID,TYPE_NAME,CAR_TYPE_URL) VALUES('SW','STATION WAGON','https://en.wikipedia.org/wiki/Station_wagon');
INSERT INTO CARTYPE(TYPE_ID,TYPE_NAME,CAR_TYPE_URL) VALUES('SPORT','SPORTS CAR','https://en.wikipedia.org/wiki/Sports_car');
INSERT INTO CARTYPE(TYPE_ID,TYPE_NAME,CAR_TYPE_URL) VALUES('SEDAN','SEDAN','https://en.wikipedia.org/wiki/Sedan_(automobile)');
INSERT INTO CARTYPE(TYPE_ID,TYPE_NAME,CAR_TYPE_URL) VALUES('VAN','VAN','https://en.wikipedia.org/wiki/Van');
INSERT INTO CARTYPE(TYPE_ID,TYPE_NAME,CAR_TYPE_URL) VALUES('EV','ELECTRIC VEHICLE','https://en.wikipedia.org/wiki/Electric_vehicle');
INSERT INTO CARTYPE(TYPE_ID,TYPE_NAME,CAR_TYPE_URL) VALUES('LU','LUXURY CAR','https://en.wikipedia.org/wiki/Luxury_car');
INSERT INTO CARTYPE(TYPE_ID,TYPE_NAME,CAR_TYPE_URL) VALUES('SUPER','SUPER CAR','https://en.wikipedia.org/wiki/Supercar');



--car insert

INSERT INTO CARS(MODEL_COLOR_ID,MODEL_NAME,SEAT_CAP,ENGINE_CAP,COLOR,PRICE,LAUNCH_DATE,STOCK,WARRANTY,COMPANY_ID,CAR_IMAGE_URL,TYPE_ID) VALUES(1,'Volkswagen Taigun',5,1498,'RED',2004849,TO_DATE('2023-03-22', 'YYYY-MM-DD'),3,2,15,'%2529_front_view_02.png&psig=AOvVaw0t4qka0aWZn8VzukN3_yfE&ust=1706106359193000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDvhtHb84MDFQAAAAAdAAAAABAD','SUV');
INSERT INTO CARS(MODEL_COLOR_ID,MODEL_NAME,SEAT_CAP,ENGINE_CAP,COLOR,PRICE,LAUNCH_DATE,STOCK,WARRANTY,COMPANY_ID,CAR_IMAGE_URL,TYPE_ID) VALUES(2,'Volkswagen Taigun',5,1498,'YELLOW',2004849,TO_DATE('2023-03-22', 'YYYY-MM-DD'),2,2,15,'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3A2020_Volkswagen_Taigun_%2528cropped%2529.jpg&psig=AOvVaw0fj5tAbmsQyVnl_PHzDiib&ust=1706106575767000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJi6nrjc84MDFQAAAAAdAAAAABAD','SUV');
INSERT INTO CARS(MODEL_COLOR_ID,MODEL_NAME,SEAT_CAP,ENGINE_CAP,COLOR,PRICE,LAUNCH_DATE,STOCK,WARRANTY,COMPANY_ID,CAR_IMAGE_URL,TYPE_ID) VALUES(3,'Volkswagen Taigun',5,1498,'GREY',2004849,TO_DATE('2023-03-22', 'YYYY-MM-DD'),4,2,15,'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cardekho.com%2Fvolkswagen%2Ftaigun%2Fcarbon-steel-grey-color&psig=AOvVaw2TvwRo8prShe8vFPSZMg4C&ust=1706106790698000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNiNzqPd84MDFQAAAAAdAAAAABAD','SUV');
INSERT INTO CARS(MODEL_COLOR_ID,MODEL_NAME,SEAT_CAP,ENGINE_CAP,COLOR,PRICE,LAUNCH_DATE,STOCK,WARRANTY,COMPANY_ID,CAR_IMAGE_URL,TYPE_ID) VALUES(4,'Corolla Cross',5,1798,'WHITE',5900000,TO_DATE('2023-03-22', 'YYYY-MM-DD'),1,1,3,'https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2024/corollacross/l/6302/089/1.png?bg=fff&fm=webp&q=90&w=1764','SUV');
INSERT INTO CARS(MODEL_COLOR_ID,MODEL_NAME,SEAT_CAP,ENGINE_CAP,COLOR,PRICE,LAUNCH_DATE,STOCK,WARRANTY,COMPANY_ID,CAR_IMAGE_URL,TYPE_ID) VALUES(5,'Corolla Cross Hybrid',5,1798,'WHITE',4500000,TO_DATE('2023-03-22', 'YYYY-MM-DD'),4,1,3,'https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2024/corollacrosshybrid/hybridxse/6316/1k3/36/4.png?fm=webp&w=930&q=90','SUV');
INSERT INTO CARS(MODEL_COLOR_ID,MODEL_NAME,SEAT_CAP,ENGINE_CAP,COLOR,PRICE,LAUNCH_DATE,STOCK,WARRANTY,COMPANY_ID,CAR_IMAGE_URL,TYPE_ID) VALUES(6,'Ford Mustang ',4,2253,'WHITE',5015090,TO_DATE('2024-01-01', 'YYYY-MM-DD'),1,1.5,16,'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2016_Ford_Mustang_Shelby_GT350.JPG/220px-2016_Ford_Mustang_Shelby_GT350.JPG','SPORT');

