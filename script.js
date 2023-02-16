var mizHp = 2950;
var mizAtk = 3000;
var mizDps = mizAtk / 292 * 30;
var marinHp = 6150;
var marinAtk = 5800;
var marinDps = marinAtk / 292 * 30;
var mizuHp = 7525;
var mizuAtk = 7175;
var mizuDps = mizuAtk / 292 * 30;

function test()
{
    console.log("test");
}

function calculation()
{
    mizHp = 1180 * (1 + document.getElementById("shield").value / 200);
    mizAtk = 1200 * (1 + document.getElementById("sword").value / 200);
    marinHp = 2460 * (1 + document.getElementById("shield").value / 200);
    marinAtk = 2320 * (1 + document.getElementById("sword").value / 200);
    mizuHp = 3010 * (1 + document.getElementById("shield").value / 200);
    mizuAtk = 2870 * (1 + document.getElementById("sword").value / 200);
    if (document.getElementById("level").value <= 60)
    {
        mizHp *= (1 + (document.getElementById("level").value - 1) * 0.2);
        mizAtk *= (1 + (document.getElementById("level").value - 1) * 0.2);
        marinHp *= (1 + (document.getElementById("level").value - 1) * 0.2);
        marinAtk *= (1 + (document.getElementById("level").value - 1) * 0.2);
        mizuHp *= (1 + (document.getElementById("level").value - 1) * 0.2);
        mizuAtk *= (1 + (document.getElementById("level").value - 1) * 0.2);
    }
    else if (document.getElementById("level").value <= 80)
    {
        mizHp *= (1 + (59 * 0.2) + ((document.getElementById("level").value - 60) * 0.1));
        mizAtk *= (1 + (59 * 0.2) + ((document.getElementById("level").value - 60) * 0.1));
        marinHp *= (1 + (59 * 0.2) + ((document.getElementById("level").value - 60) * 0.1));
        marinAtk *= (1 + (59 * 0.2) + ((document.getElementById("level").value - 60) * 0.1));
        mizuHp *= (1 + (59 * 0.2) + ((document.getElementById("level").value - 60) * 0.1));
        mizuAtk *= (1 + (59 * 0.2) + ((document.getElementById("level").value - 60) * 0.1));
    }
    else
    {
        mizHp *= (1 + (59 * 0.2) + (20 * 0.1) + ((document.getElementById("level").value - 80) * 0.05));
        mizAtk *= (1 + (59 * 0.2) + (20 * 0.1) + ((document.getElementById("level").value - 80) * 0.05));
        marinHp *= (1 + (59 * 0.2) + (20 * 0.1) + ((document.getElementById("level").value - 80) * 0.05));
        marinAtk *= (1 + (59 * 0.2) + (20 * 0.1) + ((document.getElementById("level").value - 80) * 0.05));
        mizuHp *= (1 + (59 * 0.2) + (20 * 0.1) + ((document.getElementById("level").value - 80) * 0.05));
        mizuAtk *= (1 + (59 * 0.2) + (20 * 0.1) + ((document.getElementById("level").value - 80) * 0.05));
    }
    mizuHp *= 1 + document.getElementById("hpTalent").value / 50;
    mizuAtk *= 1 + document.getElementById("atkTalent").value / 50;
    if (document.getElementById("orb").value == "def")
    {
        mizuHp *= 1 + document.getElementById("grade").value * 0.04;
    }
    if (document.getElementById("orb").value == "atk")
    {
        mizuAtk *= 1 + document.getElementById("grade").value * 0.04;
    }
    if (document.getElementById("aliens").checked)
    {
        mizHp *= 4 + document.getElementById("treasure").value / 300;
        marinHp *= 4 + document.getElementById("treasure").value / 300;
        mizuHp *= 4 + document.getElementById("treasure").value / 300;
    }
    if (document.getElementById("combo").value == "comboDef")
    {
        mizuHp *= 1 + document.getElementById("comboBoost").value * 0.1;
    }
    if (document.getElementById("combo").value == "comboAtk" && document.getElementById("comboBoost").value > 0)
    {
        mizuAtk *= 1.05 + document.getElementById("comboBoost").value * 0.05;
    }
    mizDps = mizAtk / 292 * 30;
    marinDps = marinAtk / 292 * 30;
    mizuDps = mizuAtk / 292 * 30;
    document.getElementById("mizHp").innerHTML = "Health: " + Math.round(mizHp);
    document.getElementById("mizAtk").innerHTML = "Damage: " + Math.round(mizAtk);
    document.getElementById("mizDps").innerHTML = "DPS: " + Math.round(mizDps);
    document.getElementById("mizDps").title = "DPS: " + mizDps;
    document.getElementById("marinHp").innerHTML = "Health: " + Math.round(marinHp);
    document.getElementById("marinAtk").innerHTML = "Damage: " + Math.round(marinAtk);
    document.getElementById("marinDps").innerHTML = "DPS: " + Math.round(marinDps);
    document.getElementById("marinDps").title = "DPS: " +marinDps;
    document.getElementById("mizuHp").innerHTML = "Health: " + Math.round(mizuHp);
    document.getElementById("mizuAtk").innerHTML = "Damage: " + Math.round(mizuAtk);
    document.getElementById("mizuDps").innerHTML = "DPS: " + Math.round(mizuDps);
    document.getElementById("mizuDps").title = "DPS: " + mizuDps;
}